import React from 'react';
import './Container.css'; // Import the CSS file

function Container() {
  return (
    <>
    <h1>Recycle your E-WASTE Hassle free with us</h1>

    <div className="container">
      {/* Image div */}
      <div className="imagediv">
        <img src="/Group 6.jpg" alt="image" />
      </div>

      {/* Button container div */}
      <div className="buttoncontainer">
        <button className="rect-button">Button 1</button>
        <button className="rect-button">Button 2</button>
        <button className="rect-button">Button 3</button>
        <button className="rect-button">Button 4</button>
      </div>
    </div>
    </>
  );
}

export default Container;
