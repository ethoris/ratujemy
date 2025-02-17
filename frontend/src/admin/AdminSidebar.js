// src/admin/AdminSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-brand-dark text-white p-4">
      <h2 className="text-xl font-bold mb-6">Panel Admina</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="/admin" 
              className={({ isActive }) => isActive ? "font-bold text-brand-blue" : "hover:text-gray-300"}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/edit-home" 
              className={({ isActive }) => isActive ? "font-bold text-brand-blue" : "hover:text-gray-300"}
            >
              Edytuj stronę główną
            </NavLink>
          </li>
          {/* Dodaj inne linki według potrzeb */}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
