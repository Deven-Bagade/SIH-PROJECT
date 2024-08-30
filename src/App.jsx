import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import About from './components/About'; 
import Sell from './components/Sell';
import Secondhand from './components/Secondhand';
import Leaderboard from './components/Leaderboard';
import Collect from './components/Collect';

function App() {
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

