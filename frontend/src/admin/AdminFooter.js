// src/admin/AdminFooter.js
import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-white text-center py-4 border-t">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default AdminFooter;
