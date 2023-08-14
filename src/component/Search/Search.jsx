import React, { useEffect, useState } from 'react'
import './Search.css'
import SearchIcon from '../../assets/Search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../../store/Slices/UserSlice'

const Search = () => {
    const [uniqdata, setUniqData] = useState([]);
    const { data } = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchdata());
    }, [])

    useEffect(() => {
        const newcategory = new Set(data.map(item => (
            item.category
        )))
        setUniqData(newcategory);
    }, [data])
    const handlClick = (e) => {
        let a = e.target.getAttribute('data-value');
        console.log(a);
    }
    return (

        <div class="input-group position-relative">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
            <ul class="dropdown-menu">
                {[...uniqdata].map(category => (
                    <li><a class="dropdown-item text-capitalize" data-value={category} onClick={handlClick} href="#">{category}</a></li>

                ))}
            </ul>
            <input type="text" class="form-control" placeholder='Search here...' aria-label="Text input with dropdown button" />
            <img src={SearchIcon} className='search_icon' alt="" srcset="" />
        </div>
    )
}

export default Search