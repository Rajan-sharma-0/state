import React from 'react';
import Agentbox from './Agentbox';
import agentimage1 from '../images/s1.png';
function Agent() {
  return (
    <div className='agent'>
      <div className="a-heading">
        <h1>Agent</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing  magni?</p>
      </div>
      <div className="b-container">
        <Agentbox image={agentimage1} name="Oggy1"/>
        <Agentbox image={agentimage1} name="Oggy2"/>
        <Agentbox image={agentimage1} name="Oggy3"/>
      </div>
      
    </div>
  )
}

export default Agent;
