import React, { useState } from 'react';
import './Login.css'; // Ensure this path is correct relative to login.jsx

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Logging in...');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Add registration logic here
    console.log('Registering...');
  };

  return (
    <div className="login-content">
      {isRegistering ? (
        <div>
          <h4 className="login-header">Register</h4>
          <form className="login-form" onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="reg-username">Username</label>
              <input id="reg-username" type="text" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input id="contact" type="number" placeholder="Enter your Mobile no." />
            </div>
            <div className="form-group">
              <label htmlFor="reg-password">Password</label>
              <input id="reg-password" type="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-submit">Sign Up</button>
            <button type="button" onClick={() => setIsRegistering(false)} className="toggle-button">Back to Log In</button>
          </form>
        </div>
      ) : (
        <div>
          <h4 className="login-header">Log In</h4>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-submit">Log In</button>
            <h4 className="signin-header">Don't have an account?</h4>
            <button type="button" onClick={() => setIsRegistering(true)} className="toggle-button">Sign Up</button>
          </form>
        </div>
      )}
    </div>
  );
}
