// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
      </Route>
      
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <MainLayout>
              <AdminDashboard />
            </MainLayout>
          </ProtectedRoute>
        } 
      />
    </Routes>
  </Router>
);

export default App;
