import React from 'react'
import logo from '../../assets/MegaMart.svg'
import Search from '../Search/Search'
import Carticon from '../Cartitem/Carticon'
import './Nav.css'

const Navbar = () => {
    
  return (
    <nav className="navbar navbar-expand nav mb-5 bg-body-tertiary d-flex justify-content-between" data-bs-theme="white">
  <div className="container">
    <div className="logo_continer d-flex gap-3">
      <span className="logo_text">M</span> <img src={logo} className='img-fluid' alt="" />
    </div>
    <Search />
      <span className="navbar-text">
       <Carticon />
      </span>
    
  </div>
</nav>
  )
}

export default Navbar