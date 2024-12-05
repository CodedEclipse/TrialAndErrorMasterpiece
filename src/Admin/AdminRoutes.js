import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';

function AdminRoutes() {
  return (
     <Routes> 
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/user-management" element={<UserManagement />} />
     </Routes>
    
  );
}

export default AdminRoutes;
