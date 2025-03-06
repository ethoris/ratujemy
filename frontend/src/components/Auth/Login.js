// frontend/src/components/Auth/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/api/v1/auth/login', { email, password });
      const token = response.data.token;
      if (!token) {
        setError('Nie udało się pobrać tokena, spróbuj ponownie.');
        return;
      }
      // Zapis tokena do localStorage
      localStorage.setItem('token', token);
      console.log('Zalogowano, token zapisany:', token);
      // Jeśli użytkownik to admin, przekieruj do panelu administratora
      if (email.toLowerCase() === 'admin@example.com') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Błąd logowania:', err);
      setError('Nieprawidłowy email lub hasło.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Logowanie</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Hasło:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required 
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default Login;
