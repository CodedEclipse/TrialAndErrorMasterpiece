import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './User/UserRoutes';
import AdminRoutes from './Admin/AdminRoutes';
import Login from './auth1/Login'
import { toast, ToastContainer } from 'react-toastify';
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
        </Routes>
      </Router>
      <ToastContainer/>
      </>

      );
    }


export default App;
