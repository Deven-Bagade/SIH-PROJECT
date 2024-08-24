import React from 'react';
import './Navbar.css'; // Ensure this path is correct relative to Navbar.jsx

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo on the left side */}
      <span className="logo">MyLogo</span>
      
      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </div>
      
      {/* Login Button on the right side */}
      <button className="login-button">Login</button>
    </div>
  );
}

export default Navbar;
