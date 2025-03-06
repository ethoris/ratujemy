import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageHomeSections = () => {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({
    type: 'about',
    title: '',
    content: '',
    order: 0
  });

  const fetchSections = () => {
    axios.get('/api/v1/homepage/sections')
      .then(response => {
        setSections(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania sekcji:', error);
      });
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleInputChange = (e) => {
    setNewSection({ ...newSection, [e.target.name]: e.target.value });
  };

  const addSection = (e) => {
    e.preventDefault();
    axios.post('/api/v1/homepage/sections', newSection)
      .then(response => {
        fetchSections();
        setNewSection({ type: 'about', title: '', content: '', order: 0 });
      })
      .catch(error => {
        console.error('Błąd dodawania sekcji:', error);
      });
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Zarządzanie Sekcjami Strony Głównej</h2>
      <form onSubmit={addSection} className="mb-6">
        <input 
          type="text" 
          name="title" 
          placeholder="Tytuł sekcji" 
          value={newSection.title} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <textarea 
          name="content" 
          placeholder="Treść sekcji" 
          value={newSection.content} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input 
          type="number" 
          name="order" 
          placeholder="Kolejność" 
          value={newSection.order} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Dodaj sekcję
        </button>
      </form>
      <div>
        {sections.map(section => (
          <div key={section.id} className="border-b py-2">
            <h3 className="font-semibold">{section.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
            <p>Kolejność: {section.order}</p>
            {/* Opcjonalnie przyciski edycji/usuwania */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageHomeSections;
