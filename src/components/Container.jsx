import React from 'react';
import './Container.css'; // Ensure this path is correct
import logo from '../components/Group_6.png'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Container() {
  return (
<div className='parentcontainer'>
      <h1>Recycle your E-WASTE Hassle-free with us</h1>

      <div className="container">
        <div className="imagediv">
          <img src={logo} alt="Recycle E-WASTE" />
        </div>

        <div className="buttoncontainer">
          <button className="rect-button">Registor your Company</button>
          <Link to="/sell" className='rect-button'>Sell</Link>
          <Link to="/secondhand" className="rect-button">2nd Hand-Market</Link>
          <button className="rect-button">Community</button>
        </div>
      </div>
      <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum blanditiis ipsa nesciunt eligendi praesentium dolore, inventore soluta optio nihil. Delectus, quo? Cupiditate eos eius commodi. Sit dolorum deserunt delectus repudiandae tenetur. Vitae rem non ducimus quia et repudiandae corporis sint hic praesentium fuga. Numquam illo eaque nobis quibusdam atque!
      </p>
      </div>
      </div>

     
  );
}

export default Container;