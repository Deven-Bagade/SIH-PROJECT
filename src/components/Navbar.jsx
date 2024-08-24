import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">MyLogo</span>
      
      <div className="nav-links">
        <Link to="/">Home</Link> 
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link> 
      </div>
      
      <button className="login-button">Login</button>
    </div>
  );
}

export default Navbar;
