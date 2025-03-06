import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeSections = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/homepage/sections')
      .then(response => {
        setSections(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania sekcji:', error);
      });
  }, []);

  return (
    <div>
      {sections.map(section => (
        <section key={section.id} className="py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeSections;
