// src/admin/AdminHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-brand-dark">
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      <div>
        <button className="text-brand-dark hover:text-brand-blue transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
