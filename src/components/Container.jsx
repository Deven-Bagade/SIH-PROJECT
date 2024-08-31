import React from 'react';
import './Container.css'; // Ensure this path is correct
import logo from '../components/Group_6.png'
import { Link } from 'react-router-dom';


function Container() {

  
  return (
    <>
     <div className="container">
          <img
            src="https://goshfood.com/wp-content/uploads/2024/05/iStock-1253713039-1.jpeg"
            alt="Image"
            className="left-image"
          />
          <div className="right-text">
            <h1>Your Waste, Our Mission – Cleaner Streets, Greener Planet!</h1>
            <p>
              Our platform is dedicated to handling your waste responsibly, ensuring cleaner streets and contributing to a greener, healthier planet for everyone.
            </p>
          </div>
        </div>
<div className='parentcontainer'>
      <h1>Recycle your WASTE Hassle-free with us</h1>

      <div className="container">
        <div className="imagediv">
          <img src={logo} alt="Recycle E-WASTE" />
        </div>

        <div className="buttoncontainer">
          <button className="rect-button">Registor your Company</button>
          <Link to="/sell" className='rect-button'>Sell/Dispose</Link>
          <Link to="/secondhand" className="rect-button">2nd Hand-Market</Link>
          <Link to="/collect" className="rect-button">Collect</Link>

        </div>
        <div>
        <p style={{color:'#1d3e2f', fontWeight:"500",fontSize:'18px', textAlign:'justify', marginLeft:'50px', marginRight:'50px'}}>              We offer a seamless and intuitive platform designed to transform how your community handles waste. With just a few clicks, you can schedule hassle-free garbage pickups, responsibly dispose of e-waste, or find buyers for second-hand items. Our mission is to simplify waste management, eliminate the need for road-side segregation, and promote environmental sustainability. By using our efficient solutions, you’re not only making waste management easier but also contributing to a cleaner, greener community. Partner with us to make a significant impact and foster a more sustainable future.
        </p>
        <div style={{display:'flex',  margin:'30px'}}>
      <Link to="/reports" className="rect-button">Pickup Request</Link>
      <br></br>
      <Link to="/filedreports" className="rect-button">Request Report</Link>
      </div>
</div>
</div>

      <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum blanditiis ipsa nesciunt eligendi praesentium dolore, inventore soluta optio nihil. Delectus, quo? Cupiditate eos eius commodi. Sit dolorum deserunt delectus repudiandae tenetur. Vitae rem non ducimus quia et repudiandae corporis sint hic praesentium fuga. Numquam illo eaque nobis quibusdam atque!
      </p>
      </div>
      </div>
</>
     
  );
}

export default Container;