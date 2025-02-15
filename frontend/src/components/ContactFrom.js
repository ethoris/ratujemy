// src/components/ContactForm.js
import React, { useState } from 'react';
import { sendContactMessage } from '../api/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactMessage(formData);
      setSuccess('Wiadomość została wysłana!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSuccess('Wystąpił błąd, spróbuj ponownie.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Imię:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <div>
        <label>Wiadomość:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Wyślij
      </button>
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default ContactForm;
