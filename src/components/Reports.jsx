import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Reports.css'; // Import the CSS file

function Report() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    description: '',
    contactInfo: '',
    image: null // State for the uploaded image
  });

  const [reportData, setReportData] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation dialog

  const locationInputRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Load saved report data from localStorage
    const savedReportData = localStorage.getItem('reportData');
    if (savedReportData) {
      try {
        const parsedData = JSON.parse(savedReportData);
        if (Array.isArray(parsedData)) {
          setReportData(parsedData);
        } else {
          console.error('Parsed data is not an array:', parsedData);
          setReportData([]);
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
        setReportData([]);
      }
    } else {
      setReportData([]);
    }
  }, []);

  useEffect(() => {
    // Initialize Google Maps Autocomplete
    if (!window.google) {
      console.error('Google Maps JavaScript API is not loaded.');
      return;
    }

    const autocomplete = new window.google.maps.places.Autocomplete(locationInputRef.current, {
      types: ['geocode'],
    });

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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0]; // Store the first file selected
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          [name]: file,
          imagePreview: reader.result // Store the data URL
        }));
      };
      
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showReport) {
      const newReportData = [...reportData, formData];
      setReportData(newReportData);
      localStorage.setItem('reportData', JSON.stringify(newReportData));
      setShowReport(false); // Hide the form after submission
      setShowConfirmation(true); // Show the confirmation dialog
    }
  };

  const handleShowReport = () => {
    setShowReport(true);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Current Position:', latitude, longitude);

          const geocoder = new window.google.maps.Geocoder();
          const latlng = { lat: latitude, lng: longitude };

          geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === 'OK' && results[0]) {
              console.log('Geocoded Address:', results[0].formatted_address);
              setFormData(prevState => ({
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

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className='report-container'>
      {showReport && (
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
              value={formData.location}
              onChange={handleChange}
              ref={locationInputRef}
              required
            />
            <button type="button" onClick={getCurrentLocation} className="current-location-button">
              Use Current Location
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Category</option>
              <option value="dry">Dry</option>
              <option value="wet">Wet</option>
              <option value="elec">Electronic</option>
              <option value="medical">Medical</option>
              <option value="chemical">Chemical</option>
            </select>
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

          <div className="form-group">
            <label htmlFor="image">Add Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // Restrict to image files
              onChange={handleChange}
            />
            {formData.image && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Selected preview"
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      )}

      {!showReport && (
        <button onClick={handleShowReport} className="show-report-button">
          Show Report Form
        </button>
      )}

      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Your form has been submitted</p>
          <button onClick={handleCloseConfirmation} className="confirmation-button">
            OK
          </button>
        </div>
      )}
    </div>
  );
}

export default Report;
