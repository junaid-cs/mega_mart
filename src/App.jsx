import { useEffect, useState } from 'react'
import './App.css'
import AddtoCart from './component/AddtoCart/AddtoCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from './store/Slices/UserSlice';
import StarRating from './component/StarRating/StarRating';



function App() {
  const { data, loading, error } = useSelector(state => state.user);
  const { filteredProducts, searchValue } = useSelector(state => state.filter)

  const dispatch = useDispatch()
  useEffect(() => {
    let url = "https://fakestoreapi.com/products"
    dispatch(fetchdata(url))
  }, []);
  // screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Update screenWidth when window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  // console.log(screenWidth);


  // stars






  const filteredData = data
    .filter(row => {
      const isMatchingCategory = filteredProducts === 'All' || row.category === filteredProducts;
      const isMatchingSearch = !searchValue || row.title.toLowerCase().includes(searchValue.toLowerCase());

      return isMatchingCategory && isMatchingSearch;
    })
    .map(item => (
      <div className="col-10 col-sm-6 col-md-3 col-lg-3 mb-5 p-0" key={item.id}>
        <div className="card align-items-center w-100 h-100 ">
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
          <div className="card-body bg-white  w-100">
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
      </div>
    ));






  return (
    <>
      <div className="row container-fluid ms-common col-11  gap-3 mx-auto">
        {filteredData}
      </div>
    </>
  )
}

export default App


