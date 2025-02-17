// src/admin/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex flex-col flex-grow">
        <header className="bg-white shadow px-4 py-3">
          <h1 className="text-2xl font-bold">Panel Admina</h1>
        </header>
        <main className="flex-grow p-6 bg-gray-100">
          {children ? children : <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
