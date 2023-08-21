import { useEffect, useState } from 'react';
import './App.css';
import AddtoCart from './component/AddtoCart/AddtoCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from './store/Slices/UserSlice';
import StarRating from './component/StarRating/StarRating';
import { motion } from 'framer-motion';

function App() {

  
  const [data,setData] = useState([]);
  const { filteredProducts, searchValue } = useSelector(state => state.filter);

  const dispatch = useDispatch();
  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
   const fetchdata = async()=>{
            const response = await fetch(url)
            const responsedata = await response.json()
            setData(responsedata);
           
        }
        fetchdata();
  }, []);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    // Add event listener to the window object
    window.addEventListener('resize', handleResize);
    // After unmount the component the event listener is remove
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filteredData = data
    .filter(row => {
      //  if in the dorpdown All is selected then show all data
      //  OR 
      //  the selected category is = to the filterproducts from the filter slice
      const isMatchingCategory = filteredProducts === 'All' || row.category === filteredProducts;
      // // if the serach is empty show all data 
      // OR
      //  if their is any data in the search box search with that data
      const isMatchingSearch = !searchValue || row.title.toLowerCase().includes(searchValue.toLowerCase());

      return isMatchingCategory && isMatchingSearch;
    })
    .map(item => (
      <motion.div
        key={item.id}
        className="col-10 col-sm-6 col-md-3 col-lg-3 mb-5 p-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7  }}
      >
        <div className="card align-items-center w-100 h-100">
          <div className='img_container position-relative w-100 d-flex justify-content-center align-items-center'>
            <img src={item.image} style={{ width: '84px', height: '158px' }} className="card-img-top -centertext object-fit-contain" alt="..." />
            {
              screenWidth > 1000 ?
                (
                  <div className="overlay position-absolute ">
                    <AddtoCart item={item} />
                  </div>
                )
                : null
            }
          </div>
          <div className="card-body bg-white w-100 ">
            <div className="d-sm-flex">
              <div className='card_title'>{item.title.split(' ').slice(0, 3).join(' ')}</div>
              <div className="card_price">${item.price}</div>
            </div>
            <div className="card_rating d-flex justify-content-between align-items-center">
              <StarRating rating={item.rating.rate} />
              {
                screenWidth <= 1000 ?
                  (
                    <div className="">
                      <AddtoCart item={item} />
                    </div>
                  )
                  : null
              }
            </div>
          </div>
        </div>
      </motion.div>
    ));

  return (
    <>
      <div className="row container-fluid ms-common col-11  gap-3 mx-auto mt-5" >
        {filteredData}
      </div>
    </>
  );
}

export default App;
