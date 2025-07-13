import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/about-icon.svg';

const Header = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  
  return (
    <div><header className="navbar">
        <div className="left1">
          <h2>Dev Tailor</h2>
        </div>

        <div className="middle1">
          <img src={logo} alt="logo" />
        </div>

        <div className="right1">
<button onClick={handleContactClick}>Contact</button>
        </div>
      </header></div>
  )
}

export default Header