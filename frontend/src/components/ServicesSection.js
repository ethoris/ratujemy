import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania usług:', error);
      });
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Oferowane Usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded shadow">
              {service.icon && (
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
