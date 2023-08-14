import React from 'react'
import logo from '../../assets/MegaMart.svg'
import Search from '../Search/Search'
import Carticon from '../Cartitem/Carticon'
import { useState,useEffect } from 'react'
import './Nav.css'

const Navbar = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Update screenWidth when window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);
  console.log(screenWidth);
    
  return (
    <div className=' mb-5 position-fixed w-100 z-3'>
    <nav className="navbar navbar-expand nav bg-body-tertiary d-flex justify-content-between" data-bs-theme="white">
  <div className="container-fluid mx-common">
    <div className="logo_continer d-flex gap-3">
      <span className="logo_text">M</span> <img src={logo} className='img-fluid' alt="" />
    </div>
    {
      screenWidth > 1000 ? (
        <Search />
      )
      : null
    }
      <span className="navbar-text">
       <Carticon />
      </span>
    
  </div>
 
</nav>
<div className="col-12 mt-1">
{
      screenWidth <= 1000 ? (
        <Search />
      )
      : null
    }
</div>
</div>
  )
}

export default Navbar