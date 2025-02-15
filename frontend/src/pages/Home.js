// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from './About'; // Import komponentu About z pliku About.js

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};

export default Home;
