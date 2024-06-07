import React from 'react';
import { NavLink } from "react-router-dom";
import  "../assets/css/Header.css";
import Abstrait1 from '../assets/Images/Abstrait1.jpg';

function header() {
  return (
      <div className='Header Fullscreen' style={{ backgroundImage:`url(${Abstrait1})`,backgroundSize:"cover"}}>
          <h1> <NavLink to="/" className="text_content">Portfolio Mandon Axel</NavLink></h1>
          <h2 className="text_content">Intégrateur web</h2>
      </div> 
  )
}

export default header;