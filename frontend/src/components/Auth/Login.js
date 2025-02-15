import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Logika logowania, np. wywołanie API
      // localStorage.setItem('authToken', data.token);
      navigate('/');
    } catch (err) {
      setError('Błędne dane logowania');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-heading font-bold mb-4">Logowanie</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Hasło:</label>
          <input 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-brand-blue text-white px-4 py-2 rounded-full hover:bg-blue-400 transition">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default Login;
