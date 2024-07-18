import React from 'react';
import logo from '../images/logo1.png';
import menu from '../images/menu.png'
import close from '../images/close.png'

function Navbar() {
  const handleClick= ()=>{
    document.querySelector('.menu').style.display='flex'
    document.querySelector('.close').style.display='block'
    document.querySelector('.menus').style.display='none'
  }
  const handleClose = ()=>{
 document.querySelector('.menu').style.display='none'
    document.querySelector('.close').style.display='none'
    document.querySelector('.menus').style.display='block'

  }
  return (
    <nav>
        <a href="#" className='logo'>
          <img src={logo} alt="logo"  className='logoimage'/>
          </a>
          <a href="#" id='openandclose'>
          <img src={menu} alt="menu" id='open'  className='hamburger menus' onClick={handleClick}/>
          <img src={close} alt="menu" id='close'  className='hamburger close' onClick={handleClose}/>
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
