import React, { useEffect, useState } from 'react'
import './Search.css'
import SearchIcon from '../../assets/Search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../../store/Slices/UserSlice'
import { filterProducts,setSearchValue} from '../../store/Slices/Filteritems'

const Search = () => {
    // const [uniqdata, setUniqData] = useState([]);
    const [dropdowndata,setDropdowndata] = useState([])
    const [val,setVal] = useState("All");
    // const { data } = useSelector(state => state.user);
    // const  filterProduts  = useSelector(state => state.filterproducts);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchdata = async()=>{
            const response = await fetch("https://fakestoreapi.com/products/categories")
            const data = await response.json()
            setDropdowndata(["All",...data]);
            // console.log(`dropdowndata ${data}`);
        }
        fetchdata();
    }, [])
    const handlClick = (e) => {
        // let a = e.target.getAttribute('data-value');
        setVal(e);
        dispatch(filterProducts(e));
        // console.log(`filterProduts ${filterProduts}`);
    }
    const handleChange = (e)=>{
          let  value = e.target.value;
          dispatch (setSearchValue(value));
    }
    return (

        <div class="input-group position-relative">
            <button class="btn  dropdown-toggle text-capitalize" type="button" data-bs-toggle="dropdown" aria-expanded="false">{val}</button>
            <ul class="dropdown-menu">
                {dropdowndata.map(category => (
                    <li key={category}><a  class="dropdown-item text-capitalize" data-value={category} onClick={()=>{handlClick(category)}} href="#">{category}</a></li>
                ))}
            </ul>
            <input type="text" onChange={handleChange} class="form-control" placeholder='Search here...' aria-label="Text input with dropdown button" />
            <img src={SearchIcon} className='search_icon' alt="" srcset="" />
        </div>
    )
}

export default Search