// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Upewnij się, że adres odpowiada Twojemu backendowi
});

// Przykładowe metody – rozszerzaj zgodnie z endpointami backendu
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const sendContactMessage = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

export const fetchPosts = async () => {
    const response = await api.get('/post');
    return response.data;
  };
  
  export const fetchMedia = async () => {
    const response = await api.get('/media');
    return response.data;
  };
  
export default api;
