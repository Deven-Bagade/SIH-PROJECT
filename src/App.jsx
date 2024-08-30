import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import About from './components/About'; 
import Sell from './components/Sell';
import Secondhand from './components/Secondhand';
import Leaderboard from './components/Leaderboard';
import Collect from './components/Collect';

function App() {
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
        <Route path="/sell" element={<Sell />} />
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/secondhand" element={<Secondhand secondHandData={secondHandData} />} />
        <Route path="/collect" element={<Collect scrapData={scrapData} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

