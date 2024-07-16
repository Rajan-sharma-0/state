import React from 'react'
import aboutimage from '../images/hero.png'
function About() {
  return (
    <div className='about'>
        <div className="about-model">
            <img src={aboutimage} alt="about image" />
        </div>
        <div className="about-text">
          <h2>We Are the best real statecompaney</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laudantium, numquam facere voluptatem voluptate totam, ipsam fugit ad reiciendis doloribus cupiditate eius consequatur nisi sequi eligendi optio repellat culpa nemo?</p>
          <button>View More Details</button>
        </div>

    </div>
  )
}

export default About;
