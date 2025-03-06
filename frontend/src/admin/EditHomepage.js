// frontend/src/admin/EditHomepage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditHomepage = () => {
  const [homepageData, setHomepageData] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroBackground: '',
    mainContent: '',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    textColor: '#000000'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/v1/homepage')
      .then(response => {
        if (response.data && response.data.homepage) {
          setHomepageData(response.data.homepage);
        }
      })
      .catch(err => {
        console.error('Błąd pobierania strony głównej:', err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHomepageData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const token = localStorage.getItem('token');
    console.log("Token: ", token); // Debugowanie tokena

    axios.post('/api/v1/homepage', homepageData, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(response => {
      console.log('Strona główna została zaktualizowana:', response.data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Błąd podczas aktualizacji strony głównej:', err);
      setError('Błąd podczas aktualizacji strony głównej.');
      setLoading(false);
    });
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Edytuj stronę główną</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Tytuł sekcji hero:</label>
          <input
            type="text"
            name="heroTitle"
            value={homepageData.heroTitle}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Podtytuł sekcji hero:</label>
          <textarea
            name="heroSubtitle"
            value={homepageData.heroSubtitle}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Link do tła sekcji hero:</label>
          <input
            type="text"
            name="heroBackground"
            value={homepageData.heroBackground}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Główna treść strony:</label>
          <textarea
            name="mainContent"
            value={homepageData.mainContent}
            onChange={handleInputChange}
            className="w-full border p-2 rounded h-40"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition"
          disabled={loading}
        >
          {loading ? 'Zapisywanie...' : 'Zapisz zmiany'}
        </button>
      </form>
    </div>
  );
};

export default EditHomepage;
