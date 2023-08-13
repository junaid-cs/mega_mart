import React from 'react'
import './Search.css'
import  SearchIcon  from '../../assets/Search.svg'

const Search = () => {
    return (
        
            <div class="input-group position-relative">
                <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mobile</a></li>
                    <li><a class="dropdown-item" href="#">Games</a></li>
                    <li><a class="dropdown-item" href="#">Toyes</a></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input type="text" class="form-control" placeholder='Search here...' aria-label="Text input with dropdown button" />
                <img src={SearchIcon} className='search_icon' alt="" srcset="" />
            </div>
    )
}

export default Search