import { useEffect, useState } from 'react'
import './App.css'
import { add } from './store/Slices/cartSlice';
import {  useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchdata = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data1 = await response.json();
      console.log(data1);
      setData(data1);
    }
    fetchdata();

  }, [])
  const handleAdd = (product)=>{
    console.log(product);
    dispatch(add(product));
  }
  return (
    <>
      <div className="row container justify-content-center gap-3 mx-auto">
    {
      data.slice(0,20).map((item)=> {return (
          <div className="col-12 col-md-3 col-lg-3 mb-5 p-0" key={item.id}>

      <div className="card align-items-center w-100 h-100 ">
        <div className='img_container position-relative w-100'>
        <img src={item.image} style={{width: '84px',height:'158px'}} className="card-img-top -centertext object-fit-contain" alt="..." />
        <div className="overlay position-absolute ">
        <button
           onClick={()=>{handleAdd(item)}}
            className="btn btn-primary">Add to cart</button>
        </div>
        </div>
        <div className="card-body bg-white  w-100">
          <div className='card_title' >{item.title}</div>
          <div className="card_price">${item.price}</div>
          <div className="card_rating">{item.rating.rate}</div>
         
        </div>
          </div>
      </div>
      )})
    }
    </div>
    </>
  )
}

export default App


