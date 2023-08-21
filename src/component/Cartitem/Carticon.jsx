import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import Buy from '../../assets/Buy.svg'
import './Carticon.css'

const Carticon = () => {
  // useSelector hook allow user to get data from store
    const item = useSelector(state => state.cart);
  return (
    <div className='cart_icon d-flex align-items-center'> 
    <img src={Buy} alt="" srcSet="" className='me-2' /> 
    <span className='fw-bold'>Cart</span>
     
     { item.length !== 0 ? <span className='cart_length'>{item.length }</span>: null}
     
     
     </div>
  )
}

export default Carticon