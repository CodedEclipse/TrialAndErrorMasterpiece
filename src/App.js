import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import UserRoutes from './User/UserRoutes';
import AdminRoutes from './Admin/AdminRoutes';
import Login from './auth1/Login'
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
      return (
       
        <><Router>
        <Routes> 
          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          {/* Admin Route */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* User Route */}
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
      <ToastContainer/>
      </>

      );
    }


export default App;
