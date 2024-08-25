import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import About from './components/About'; // Example additional page
import Sell from './components/Sell';

function App() {
  return (
    <BrowserRouter basename="/SIH-PROJECT">
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell" element={<Sell/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
