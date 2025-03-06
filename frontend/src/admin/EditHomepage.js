import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import EditContent from './EditContent';
import ColorPicker from '../components/ColorPicker';

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
  const autosaveTimer = useRef(null);

  // Pobieranie tokenu – zakładamy, że po zalogowaniu token został zapisany w localStorage
  const token = localStorage.getItem('token');

  // Pobieranie aktualnych danych strony głównej
  useEffect(() => {
    axios.get('/api/v1/homepage', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
  }, [token]);

  // Funkcja aktualizująca stan treści
  const handleContentChange = (field, value) => {
    setHomepageContent(prev => ({ ...prev, [field]: value }));
  };

  // Funkcja zapisu – wysyła dane do API wraz z nagłówkiem autoryzacyjnym
  const saveChanges = () => {
    axios.post('/api/v1/homepage', homepageContent, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        alert('Strona główna została zaktualizowana!');
      })
      .catch(err => {
        console.error('Błąd podczas aktualizacji strony głównej:', err);
        alert('Błąd podczas aktualizacji strony głównej.');
      });
  };

  // Ustawienie mechanizmu autosave (co 30 sekund)
  useEffect(() => {
    autosaveTimer.current = setInterval(() => {
      console.log('Autosave: zapisuję zmiany...');
      axios.post('/api/v1/homepage', homepageContent, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => {
          console.log('Autosave: zmiany zapisane.');
        })
        .catch(err => {
          console.error('Autosave: błąd zapisu', err);
        });
    }, 30000); // 30000 ms = 30 sekund

    return () => clearInterval(autosaveTimer.current);
  }, [homepageContent, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveChanges();
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
          <ColorPicker
            color={homepageContent.textColor}
            onChange={(newColor) => handleContentChange('textColor', newColor)}
          />
        </div>
        <button type="submit" className="w-full bg-brand-blue text-white py-2 rounded hover:bg-blue-400 transition">
          Zapisz zmiany
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        Zmiany są automatycznie zapisywane co 30 sekund.
      </p>
    </div>
  );
};

export default EditHomepage;
