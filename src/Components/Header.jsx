import React from 'react';
import { NavLink } from "react-router-dom";
import  "../assets/css/Header.css";

function header() {
  return (
    <div className='Header'>
        <h1> <NavLink to="/">Portfolio Mandon Axel</NavLink></h1>
        <div className='Header_navlink'>
            <span>
            <NavLink to="/About">A propos de moi</NavLink>
            </span>
            <span>
            <NavLink to="/Skill">Compétences</NavLink>
            </span>
            <span>
            <NavLink to="">Experience</NavLink>
            </span>
            <span>
            <NavLink to="/Project">Projet</NavLink>
            </span>
        </div>
    </div>
  )
}

export default header;