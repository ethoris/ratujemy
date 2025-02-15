// src/components/MediaGallery.js
import React, { useEffect, useState } from 'react';
import { fetchMedia } from '../api/api';

const MediaGallery = () => {
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const data = await fetchMedia();
        // Jeśli data nie jest tablicą, ustaw pustą tablicę lub odpowiednią wartość
        setMediaItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Błąd pobierania mediów', error);
      }
    };

    loadMedia();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {mediaItems.map((item) => (
        <div key={item.id} className="border p-2">
          <img src={item.url} alt={item.alt || 'Media'} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;
