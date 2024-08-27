import React, { useState } from 'react';
import './Navbar.css'; // Ensure this path is correct relative to Navbar.jsx
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Login from './Login';




function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false); // State for nav visibility

  // Function to handle login button click
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to toggle navigation menu visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
    <div className="navbar">
      <button
        className="toggle"
        onClick={toggleNav}
        style={{ color: isNavVisible ? 'black' : 'white' }} 
      >
        ☰
      </button>
      <h2 className="logo">Logo</h2>
      <div className={`nav-links ${isNavVisible ? 'visible' : 'hidden'}`}>
      <Link to="/">Home</Link> 
        <Link to="/about">About Us</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <button className="login-button" onClick={handleLoginClick}>Login</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>×</button>
            <Login />
           
          </div>
        </div>
      )}
      
    </div>


</>

  );
}

export default Navbar;
















