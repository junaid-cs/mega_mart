import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/Slices/cartSlice';
import './Cartitems.css'

const Cartitems = () => {
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(items)
     const handleRemove = (productid)=>{
        dispatch(remove(productid))
     }
  return (
    <div>
        {
            items.map(item =>(
                <div className="col-12 col-md-4 col-lg-3 mb-5" key={item.id}>

                <div className="card align-items-center"  style={{width: '227px'}}>
                  <img src={item.image} style={{width: '84px',height:'158px'}} className="card-img-top -centertext object-fit-contain img-fluid" alt="..." />
                  <div className="card-body text-center">
                    <button onClick={()=>handleRemove(item.id)}  className="btn btn-danger">Remove to cart</button>
                  </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cartitems