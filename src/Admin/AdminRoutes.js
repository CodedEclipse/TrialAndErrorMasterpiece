import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import Maketrue from './MakeTrue';

function AdminRoutes() {
  return (
     <Routes> 
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/user-management" element={<UserManagement />} />
       <Route path="/maketrue" element={<Maketrue />} />
     </Routes>
    
  );
}

export default AdminRoutes;
