import React from 'react';

function Bproperty(props) {
  return (
    <div className='p-box'>
        <img src={props.image} alt="produt" />
      <p>{props.name}</p>
      <a href="#" className='pricr'>{props.price}</a>
      <a href="#" className='buy-btn'>Add to cart</a>
    </div>
  )
}

export default Bproperty;
