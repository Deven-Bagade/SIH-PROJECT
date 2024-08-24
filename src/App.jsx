import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Container from './components/Container';// Correct import for the Navbar component

function App() {
  return (
    <div>
      <Navbar />
      <Container/>

      {/* Other components */}
    </div>
  );
}

export default App;
