// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
