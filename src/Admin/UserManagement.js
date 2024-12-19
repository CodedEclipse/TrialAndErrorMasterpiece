import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './assets/css/admin.css'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';


function UserManagement(){
const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to track sidebar toggle

  // Function to handle sidebar toggle
  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };
    return (
        <div className="d-flex flex-column vh-100">
      <AdminHeader />
      <div className="d-flex flex-grow-1">
        <AdminSidebar onSidebarToggle={handleSidebarToggle}/>
        <main
          className={`container-fluid background_color ${
            isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'
          }`}
          style={{
            marginLeft: isSidebarCollapsed ? '65px' : '250px',
            transition: 'margin-left 0.3s',
          }}
        >
          <h1>User management section</h1>
        </main>
      </div>
      <Footer />
    </div>
    );
}

export default UserManagement;