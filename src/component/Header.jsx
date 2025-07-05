import React from 'react'
import './Header.css';
import logo from '../assets/icons8-camera-shutter-100.png';

const Header = () => {
  
  return (
    <div><header className="navbar">
        <div className="left1">
          <h2>Dev Tailor</h2>
        </div>

        <div className="middle1">
          <img src={logo} alt="logo" />
        </div>

        <div className="right1">
          <button>Contact</button>
        </div>
      </header></div>
  )
}

export default Header