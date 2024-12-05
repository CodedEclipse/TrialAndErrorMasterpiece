import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './assets/css/admin.css'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';


function UserManagement(){

    return (
        <div className="d-flex flex-column vh-100">
      <AdminHeader />
      <div className="d-flex flex-grow-1">
        <AdminSidebar />
        <main
          className="container-fluid"
          style={{ marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s' }}
        >
          <h1>User management section</h1>
        </main>
      </div>
      <Footer />
    </div>
    );
}

export default UserManagement;