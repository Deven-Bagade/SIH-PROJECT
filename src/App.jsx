import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import About from './components/About'; 
import Sell from './components/Sell';
import Secondhand from './components/Secondhand';
import Leaderboard from './components/Leaderboard';
import Collect from './components/Collect';
import News from './components/News';
import Rep from './components/Reports';
import FRep from './components/FiledReports';

function App() {
  const [userPoints, setUserPoints] = useState({});

  useEffect(() => {
    // Dynamically load chatbot scripts
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/a442f241-0695-4d18-95c4-73698ce2624c/webchat/v2.1/config.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Clean up function to remove scripts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); 

  // Initialize data from localStorage
  useEffect(() => {
    const savedUserPoints = localStorage.getItem('userPoints');
    if (savedUserPoints) {
      try {
        const parsedPoints = JSON.parse(savedUserPoints);
        if (parsedPoints && typeof parsedPoints === 'object') {
          setUserPoints(parsedPoints);
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

  const storedSecondHandData = localStorage.getItem('secondHandData');
  const secondHandData = storedSecondHandData ? JSON.parse(storedSecondHandData) : [];
  const storedScrapData = localStorage.getItem('scrapData');
  const scrapData = storedScrapData ? JSON.parse(storedScrapData) : [];

  return (
    <BrowserRouter basename="/SIH-PROJECT">
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/sell" element={<Sell setUserPoints={setUserPoints} />} />
        <Route path="/reports" element={<Rep />} />
        <Route path="/filedreports" element={<FRep />} />
        <Route path="/leaderboard" element={<Leaderboard userPoints={userPoints} />} />
        <Route path="/secondhand" element={<Secondhand secondHandData={secondHandData} />} />
        <Route path="/collect" element={<Collect scrapData={scrapData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
