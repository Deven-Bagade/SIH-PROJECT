import React, { useState, useEffect, useRef } from 'react';
import './Sell.css'

function Sell() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    productName: '',
    description: '',
    price: '',
    contactInfo: ''
  });

  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data
  const locationInputRef = useRef(null); // Reference to the location input field

  useEffect(() => {
    // Check if Google Maps API is loaded
    if (!window.google) {
      console.error('Google Maps JavaScript API is not loaded.');
      return;
    }

    // Initialize Google Places Autocomplete when the component mounts
    const autocomplete = new window.google.maps.places.Autocomplete(locationInputRef.current, {
      types: ['geocode'], // Restrict to geographical location types
    });

    // Add a listener to handle when the user selects an address
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        setFormData(prevState => ({
          ...prevState,
          location: place.formatted_address,
        }));
        console.log('Autocomplete Location:', place.formatted_address);
      }
    });
  }, []);

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler to submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Set submitted data to formData state
    console.log('Form Data Submitted:', formData);
  };

  // Function to get current location using Geolocation API
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Current Position:', latitude, longitude); // Debugging output

          const geocoder = new window.google.maps.Geocoder();

          const latlng = { lat: latitude, lng: longitude };

          geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === 'OK' && results[0]) {
              console.log('Geocoded Address:', results[0].formatted_address); // Debugging output
              setFormData((prevState) => ({
                ...prevState,
                location: results[0].formatted_address,
              }));
            } else {
              console.error('Geocoder failed due to: ' + status);
            }
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="sell-page">
      <h2>Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            ref={locationInputRef} // Use ref for the input field
            value={formData.location}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={getCurrentLocation} className="current-location-button">
            Use Current Location
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo">Contact Information:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Display submitted data if available */}
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Details</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Location:</strong> {submittedData.location}</p>
          <p><strong>Product Name:</strong> {submittedData.productName}</p>
          <p><strong>Description:</strong> {submittedData.description}</p>
          <p><strong>Price:</strong> {submittedData.price}</p>
          <p><strong>Contact Information:</strong> {submittedData.contactInfo}</p>
        </div>
      )}
    </div>
  );
}

export default Sell;
