import React from 'react'
import './AddtoCart.css'
import { add } from '../../store/Slices/cartSlice';
import {  useDispatch } from 'react-redux';

function AddtoCart({item}) {
    const dispatch = useDispatch();
    const handleAdd = (product)=>{
        console.log(product);
        dispatch(add(product));
      }
  return (
    <div className='cart-btn'><button
    onClick={()=>{handleAdd(item)}}
     className="btn btn-primary">Add to cart
     </button></div>
  )
}

export default AddtoCart