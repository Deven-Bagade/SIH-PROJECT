import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best service to our customers.
        Our mission is to recycle e-waste in an eco-friendly manner and help create a sustainable environment.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our mission is to minimize the impact of electronic waste on the environment by encouraging
        responsible recycling and disposal practices. We believe in creating a sustainable future
        for the next generations.
      </p>

      <h2>Our Team</h2>
      <p>
        We are a team of dedicated professionals with a passion for technology and environmental sustainability.
        Our team works tirelessly to ensure that we provide the best services to our customers and partners.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions, feel free to reach out to us at <a href="mailto:contact@recycle-ewaste.com">contact@recycle-ewaste.com</a>.
      </p>
    </div>
  );
}

export default About;
