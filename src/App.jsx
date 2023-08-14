import { useEffect, useState } from 'react'
import './App.css'
import AddtoCart from './component/AddtoCart/AddtoCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata  } from './store/Slices/UserSlice';
import StarRating from './component/StarRating/StarRating';



function App() {
  const {data,loading,error} = useSelector(state => state.user);
  const {filteredProducts,searchValue} = useSelector(state=>state.filter)

const dispatch = useDispatch()
useEffect( () => {
 let url="https://fakestoreapi.com/products"
  dispatch(fetchdata(url))
},[]);
// stars






const filteredData = data
.filter(row => {
  if (
    (filteredProducts !== 'All' && row.category === filteredProducts) ||
    (filteredProducts === 'All' && (searchValue === '' || row.title.toLowerCase().includes(searchValue.toLowerCase())))
  ) {
    return row.category;
  }
})
.map(item => (
  <div className="col-12 col-md-3 col-lg-3 mb-5 p-0" key={item.id}>
    <div className="card align-items-center w-100 h-100 ">
      <div className='img_container position-relative w-100'>
        <img src={item.image} style={{ width: '84px', height: '158px' }} className="card-img-top -centertext object-fit-contain" alt="..." />
        <div className="overlay position-absolute ">
          <AddtoCart item={item} />
        </div>
      </div>
      <div className="card-body bg-white  w-100">
        <div className='card_title'>{item.title.split(' ').slice(0, 3).join(' ')}</div>
        <div className="card_price">${item.price}</div>
        <div className="card_rating">
        <StarRating rating={item.rating.rate} />
          </div>
      </div>
    </div>
  </div>
));





 
  return (
    <>
      <div className="row container justify-content-center gap-3 mx-auto">
      {filteredData}
    </div>
    </>
  )
}

export default App


