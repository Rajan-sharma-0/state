import React from 'react';
import logo from '../images/logo1.png';


function Navbar() {
  return (
    <nav>
        <a href="#" className='logo'>
          <img src={logo} alt="logo" />
        </a>
        
        {/* <input className='menu-btn' type="checkbox" id='menu-btn' /> */}
        {/* <label className="menu-icon" >
        <span className='nav-icon'></span>
        </label> */}
        <ul className="menu">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Sections</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className="property">Login</a>
    </nav>
  )
}

export default Navbar;
