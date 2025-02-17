// src/admin/EditHomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditHomePage = () => {
  const [content, setContent] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroBackground: '',
    mainContent: '',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    textColor: '#000000',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('api/v1/homepage')
      .then((response) => {
        setContent(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          // Jeśli rekord nie istnieje, ustaw domyślne wartości
          console.log("Brak rekordu strony głównej, ustawiam domyślne wartości.");
          setContent({
            heroTitle: '',
            heroSubtitle: '',
            heroBackground: '',
            mainContent: '',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            textColor: '#000000',
          });
        } else {
          console.error('Błąd podczas pobierania treści strony głównej:', err);
          setError('Błąd podczas pobierania treści strony głównej.');
        }
        setLoading(false);
      });
  }, []);

  const handleChange = (field, value) => {
    setContent(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('api/v1/homepage', content)
      .then(() => {
        alert('Strona główna została zaktualizowana!');
      })
      .catch((err) => {
        console.error('Błąd podczas aktualizacji strony głównej:', err);
        alert('Błąd podczas aktualizacji strony głównej.');
      });
  };

  if (loading) return <div className="container mx-auto p-4">Ładowanie...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Edytuj stronę główną</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">Tytuł sekcji hero:</label>
          <input
            type="text"
            value={content.heroTitle}
            onChange={(e) => handleChange('heroTitle', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Podtytuł sekcji hero:</label>
          <ReactQuill
            value={content.heroSubtitle}
            onChange={(value) => handleChange('heroSubtitle', value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">
            Link do tła sekcji hero (obraz lub wideo):
          </label>
          <input
            type="text"
            value={content.heroBackground}
            onChange={(e) => handleChange('heroBackground', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Główna treść strony:</label>
          <ReactQuill
            value={content.mainContent}
            onChange={(value) => handleChange('mainContent', value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Czcionka (font family):</label>
          <input
            type="text"
            value={content.fontFamily}
            onChange={(e) => handleChange('fontFamily', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Rozmiar czcionki:</label>
          <input
            type="text"
            value={content.fontSize}
            onChange={(e) => handleChange('fontSize', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Kolor tekstu:</label>
          <input
            type="color"
            value={content.textColor}
            onChange={(e) => handleChange('textColor', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brand-blue text-white py-2 rounded hover:bg-blue-400 transition"
        >
          Zapisz zmiany
        </button>
      </form>

      <div className="mt-10 border-t pt-6">
        <h3 className="text-xl font-bold mb-4 text-center">Podgląd na żywo</h3>
        <div 
          className="p-4"
          style={{
            fontFamily: content.fontFamily,
            fontSize: content.fontSize,
            color: content.textColor
          }}
          dangerouslySetInnerHTML={{ __html: content.mainContent }}
        />
      </div>
    </div>
  );
};

export default EditHomePage;
