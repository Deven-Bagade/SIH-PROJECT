import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import About from './components/About'; 
import Sell from './components/Sell';
import Secondhand from './components/Secondhand';

function App() {
  const storedSecondHandData = localStorage.getItem('secondHandData');
  const secondHandData = storedSecondHandData ? JSON.parse(storedSecondHandData) : [];

  return (
    <BrowserRouter basename="/SIH-PROJECT">
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/secondhand" element={<Secondhand secondHandData={secondHandData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
``
