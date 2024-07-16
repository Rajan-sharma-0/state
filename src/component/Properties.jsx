import React from 'react';
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png';

function Properties() {
  return (
    <div className='product'>
        <div className="p-heading">
            <h3>Properties</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum?</p>
        </div>
        <div className="product-container">
            <Bproperty image={pimage1} name="1-floor" price="4000009"/>
            <Bproperty image={pimage1} name="2-floor" price="4000009"/>
            <Bproperty image={pimage1} name="3-floor" price="4000009"/>
        </div>
    </div>
  )
}

export default Properties;
