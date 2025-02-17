// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroVideo from '../assets/video/hero-movie.mp4';

const Hero = () => {
  const typedElement = useRef(null);
  // Usunięto pasek stanu – nie potrzebujemy już scroll progress bar

  useEffect(() => {
    const options = {
      strings: [
        "Naprawiamy Twoje urządzenia!",
        "Telefony, tablety, dyski, pendrive'y, karty pamięci – wszystko!",
        "Twoje dane to nasza misja!"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Tło wideo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      {/* Gradientowy overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      {/* Treść sekcji hero */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fadeInUp">
          <span ref={typedElement}></span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8 animate-fadeInUp delay-200">
          Profesjonalna naprawa urządzeń mobilnych i nośników danych – szybko, skutecznie i profesjonalnie!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="tel:666349210"
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition transform hover:scale-105"
          >
            Zadzwoń do nas
          </a>
          <a
            href="/contact"
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition transform hover:scale-105"
          >
            Formularz kontaktowy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
