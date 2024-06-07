import React from 'react'
import "../assets/css/About.css";
import Abstrait2 from '../assets/Images/Abstrait2.jpg';

function About() {
  return (

    <div className='About Fullscreen' style={{ backgroundImage:`url(${Abstrait2})`,backgroundSize:"cover"}}>
        <h2>A Propos de moi</h2>
    </div>

  )
}

export default About