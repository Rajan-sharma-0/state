import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div className='header'>
      <Navbar/>
      <div className="intro">
        <p>Looking for a Property</p>
        <h1>Buy & Sell Properties</h1>
        <p className="details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores neque, ea distinctio reprehenderit ab ipsa deserunt eligendi tenetur consequuntur pariatur quis, dicta molestiae? Qui suscipit porro eum? Ipsam, quasi eos!</p>
        <a href="#" className="header-btn">Detai</a>
      </div>
    </div>
  )
}

export default Header;
