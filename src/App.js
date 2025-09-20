import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner/Banner';
import Card from './Components/card/Card.js';
import Footer from './Components/footer/Footer.js';
function App() {
  return (
    <div>
      <Navbar/>
       <Banner/>
       <Card/>
       <Footer/>
    </div>
  );
}

export default App;
