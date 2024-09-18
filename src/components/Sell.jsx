import React, { useState, useEffect, useRef } from 'react';
import './Sell.css';
import ScrapDiv from './ScrapDiv';
import SecondHandDiv from './SecondHandDiv';
import Incentives from './Incentives';
import Leaderboard from './Leaderboard'; // Import Leaderboard component

function Sell() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    productName: '',
    category: '',
    description: '',
    price: '',
    weight: '',
    contactInfo: ''
  });

  const [secondHandData, setSecondHandData] = useState([]);
  const [scrapData, setScrapData] = useState([]);
  const [userPoints, setUserPoints] = useState({});

  // Initialize data from localStorage
  useEffect(() => {
    const savedSecondHandData = localStorage.getItem('secondHandData');
    if (savedSecondHandData) {
      try {
        const parsedData = JSON.parse(savedSecondHandData);
        if (Array.isArray(parsedData)) {
          setSecondHandData(parsedData);
        } else {
          console.error('Parsed secondHandData is not an array:', parsedData);
        }
      } catch (error) {
        console.error('Error parsing secondHandData from localStorage:', error);
      }
    }

    const savedScrapData = localStorage.getItem('scrapData');
    if (savedScrapData) {
      try {
        const parsedData = JSON.parse(savedScrapData);
        if (Array.isArray(parsedData)) {
          setScrapData(parsedData);
        } else {
          console.error('Parsed scrapData is not an array:', parsedData);
        }
      } catch (error) {
        console.error('Error parsing scrapData from localStorage:', error);
      }
    }

    const savedUserPoints = localStorage.getItem('userPoints');
    if (savedUserPoints) {
      try {
        const parsedPoints = JSON.parse(savedUserPoints);
        if (parsedPoints && typeof parsedPoints === 'object') {
          setUserPoints(parsedPoints);
        } else {
          console.error('Parsed userPoints is not an object:', parsedPoints);
        }
      } catch (error) {
        console.error('Error parsing userPoints from localStorage:', error);
      }
    }
  }, []);

  // Save userPoints to localStorage whenever they change
  useEffect(() => {
    if (Object.keys(userPoints).length > 0) {
      localStorage.setItem('userPoints', JSON.stringify(userPoints));
    }
  }, [userPoints]);

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

    const points = showSecondHand ? 14 : showScrap ? 7 : 0;

    setUserPoints(prevPoints => {
      const currentPoints = prevPoints[formData.name] || 0;
      return {
        ...prevPoints,
        [formData.name]: currentPoints + points,
      };
    });

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
          <h2>Choose an Option</h2>
          <button type="button" className="submit-button" id='2ndhandproduct' onClick={handleSubmit2ndhand}>2nd Hand</button>
          <button type="button" className="submit-button" id='scrap' onClick={handleSubmitScrap}>Dispose</button>
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
        <SecondHandDiv
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          getCurrentLocation={getCurrentLocation}
        />
      )}

      
    </div>
  );
}

export default Sell;
