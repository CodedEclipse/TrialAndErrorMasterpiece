import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
//import Header from './AdminHeader'

function AdminRoutes() {
  return (
     <Routes> 
       <Route path="/" element={<Dashboard />} />
     </Routes>
    
  );
}

export default AdminRoutes;
