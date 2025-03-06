import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServicesSection from '../components/ServicesSection';
import HomeSections from '../components/HomeSections';

const Home = () => {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/homepage')
      .then(response => {
        setHomepageData(response.data.homepage);
      })
      .catch(error => {
        console.error('Błąd pobierania strony głównej:', error);
      });
  }, []);

  return (
    <div>
      {homepageData && (
        <>
          <section className="hero">
            <h1 className="text-4xl font-bold">{homepageData.heroTitle}</h1>
            <p>{homepageData.heroSubtitle}</p>
            {/* Inne elementy sekcji hero */}
          </section>
          <ServicesSection />
          <HomeSections />
        </>
      )}
    </div>
  );
};

export default Home;
