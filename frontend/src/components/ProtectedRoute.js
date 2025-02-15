import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Przykładowa logika – w praktyce możesz sprawdzać token lub stan użytkownika
  const isAuthenticated = localStorage.getItem('authToken');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
