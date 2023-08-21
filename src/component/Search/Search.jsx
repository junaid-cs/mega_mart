import React, { useEffect, useState } from 'react'
import './Search.css'
import SearchIcon from '../../assets/Search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts,setSearchValue} from '../../store/Slices/Filteritems'

const Search = () => {
    // display all data in dropdown that is fetch form api
    const [dropdowndata,setDropdowndata] = useState([])
    // to set data in dropdown
    const [val,setVal] = useState("All");
    const dispatch = useDispatch();
    // useEffect is a sideeffect it run when the component is mount []
    useEffect(() => {
        const fetchdata = async()=>{
            const response = await fetch("https://fakestoreapi.com/products/categories")
            const data = await response.json()
            setDropdowndata(["All",...data]);
           
        }
        fetchdata();
    }, [])

    const handlClick = (e) => {
        // set dropdown value
        setVal(e);
        // dispatch function from filter slice
        dispatch(filterProducts(e));
    
    }
    const handleChange = (e)=>{
        // Set Value to the search in fileterSlice
          let  value = e.target.value;
          dispatch (setSearchValue(value));
    }
    return (

        <div className="input-group position-relative">
            <button className="btn  dropdown-toggle text-capitalize" type="button" data-bs-toggle="dropdown" aria-expanded="false">{val}</button>
            <ul className="dropdown-menu">
                {dropdowndata.map(category => (
                    // dropdown options
                    <li key={category}><a  className="dropdown-item text-capitalize" data-value={category} onClick={()=>{handlClick(category)}} href="#">{category}</a></li>
                ))}
            </ul>
            {/* search bar */}
            <input type="text" onChange={handleChange} className="form-control" placeholder='Search here...' aria-label="Text input with dropdown button" />
            <img src={SearchIcon} className='search_icon' alt="" />
        </div>
    )
}

export default Search