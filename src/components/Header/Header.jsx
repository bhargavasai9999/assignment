// Header.js
import React from 'react';
import { IoMdLogIn } from "react-icons/io";
import './Header.css'; 
import { FaPeopleGroup } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="header-container"> 
      <div>
        <h3><FaPeopleGroup size={30} />&nbsp;IndigoLearn</h3>
      </div>
      <div className="header-menu text-center"> 
        <ul className='fw-bold'>
          <li><a>Why you Choose</a></li> 
          <li><a>Learn ACCA</a></li>
          <li><a>Placements</a></li>
        </ul>
      </div>
      <div>
        <button className='header-menu-button'><IoMdLogIn size={25}/> Login/Sign Up</button>
      </div>
    </div>
  );
};
