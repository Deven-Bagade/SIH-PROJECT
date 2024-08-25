import React, { useState, useEffect, useRef } from 'react';
import './Sell.css';
import ScrapDiv from './ScrapDiv';
import SecondHandDiv from './SecondHandDiv';
import Secondhand from './Secondhand';

function Sell() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    productName: '',
    description: '',
    price: '',
    contactInfo: ''
  });

  const [secondHandData, setSecondHandData] = useState([]);
  const [scrapData, setScrapData] = useState([]);

  // Initialize submittedData from localStorage
  useEffect(() => {
    const savedSecondHandData = localStorage.getItem('secondHandData');
    if (savedSecondHandData) {
      try {
        const parsedData = JSON.parse(savedSecondHandData);
        if (Array.isArray(parsedData)) {
          setSecondHandData(parsedData);
        } else {
          console.error('Parsed data is not an array:', parsedData);
          setSecondHandData([]);
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
        setSecondHandData([]);
      }
    } else {
      setSecondHandData([]);
    }

    const savedScrapData = localStorage.getItem('scrapData');
    if (savedScrapData) {
      try {
        const parsedData = JSON.parse(savedScrapData);
        if (Array.isArray(parsedData)) {
          setScrapData(parsedData);
        } else {
          console.error('Parsed data is not an array:', parsedData);
          setScrapData([]);
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
        setScrapData([]);
      }
    } else {
      setScrapData([]);
    }
  }, []);

  const locationInputRef = useRef(null);
  const [showSecondHand, setShowSecondHand] = useState(false);
  const [showScrap, setShowScrap] = useState(false);

  useEffect(() => {
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSecondHand) {
      const newSecondHandData = [...secondHandData, formData];
      setSecondHandData(newSecondHandData);
      localStorage.setItem('secondHandData', JSON.stringify(newSecondHandData));
    } else if (showScrap) {
      const newScrapData = [...scrapData, formData];
      setScrapData(newScrapData);
      localStorage.setItem('scrapData', JSON.stringify(newScrapData));
    }
  };

  const handleSubmit2ndhand = () => {
    setShowSecondHand(true);
    setShowScrap(false);
  };

  const handleSubmitScrap = () => {
    setShowScrap(true);
    setShowSecondHand(false);
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
      {!showSecondHand && !showScrap && (
        <div className='2ndhandorscrap'>
          <h2>Sell Your Product As:</h2>
          <button type="button" className="submit-button" id='2ndhandproduct' onClick={handleSubmit2ndhand}>2nd Hand</button>
          <button type="button" className="submit-button" id='scrap' onClick={handleSubmitScrap}>Scrap</button>
        </div>
      )}

      {showScrap && (
        <ScrapDiv
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          getCurrentLocation={getCurrentLocation}
        />
      )}

      {showSecondHand && (
        <>
          <SecondHandDiv
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            getCurrentLocation={getCurrentLocation}
          />
        </>
      )}
    </div>
  );
}

export default Sell;
