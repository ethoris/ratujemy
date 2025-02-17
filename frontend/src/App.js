// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./admin/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./admin/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./pages/Contact";
import EditHomePage from "./admin/EditHomepage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Panel administratora */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/admin/edit-home" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <EditHomePage />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />
    </Routes>
  </Router>
);

export default App;
