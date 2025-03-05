// EditHomepage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditContent from './EditContent'; // Nasz komponent edytora

const EditHomepage = () => {
  const [homepageContent, setHomepageContent] = useState({
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

  // Pobieranie aktualnych danych strony głównej
  useEffect(() => {
    axios.get('/api/v1/homepage')
      .then(response => {
        setHomepageContent(response.data);
        setLoading(false);
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          console.log("Brak rekordu strony głównej, ustawiam domyślne wartości.");
          setHomepageContent({
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

  // Funkcja aktualizująca treść w stanie
  const handleContentChange = (field, value) => {
    setHomepageContent(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/v1/homepage', homepageContent)
      .then(() => alert('Strona główna została zaktualizowana!'))
      .catch(err => {
        console.error('Błąd podczas aktualizacji strony głównej:', err);
        alert('Błąd podczas aktualizacji strony głównej.');
      });
  };

  if (loading) return <div>Ładowanie...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Edytuj stronę główną</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Tytuł sekcji hero:</label>
          <input
            type="text"
            value={homepageContent.heroTitle}
            onChange={(e) => handleContentChange('heroTitle', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Podtytuł sekcji hero:</label>
          <EditContent
            initialContent={homepageContent.heroSubtitle}
            onChange={(value) => handleContentChange('heroSubtitle', value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Link do tła sekcji hero:</label>
          <input
            type="text"
            value={homepageContent.heroBackground}
            onChange={(e) => handleContentChange('heroBackground', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Główna treść strony:</label>
          <EditContent
            initialContent={homepageContent.mainContent}
            onChange={(value) => handleContentChange('mainContent', value)}
          />
        </div>
        {/* Dodatkowe pola: fontFamily, fontSize, textColor */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Czcionka (font family):</label>
          <input
            type="text"
            value={homepageContent.fontFamily}
            onChange={(e) => handleContentChange('fontFamily', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Rozmiar czcionki:</label>
          <input
            type="text"
            value={homepageContent.fontSize}
            onChange={(e) => handleContentChange('fontSize', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Kolor tekstu:</label>
          <input
            type="color"
            value={homepageContent.textColor}
            onChange={(e) => handleContentChange('textColor', e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-brand-blue text-white py-2 rounded hover:bg-blue-400 transition">
          Zapisz zmiany
        </button>
      </form>
    </div>
  );
};

export default EditHomepage;
