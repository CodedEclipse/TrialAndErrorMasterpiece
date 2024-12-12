import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import Main from './main';

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to track sidebar toggle

  // Function to handle sidebar toggle
  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="d-flex flex-column vh-100">
      
      {/* Header */}
      <AdminHeader />

      {/* Sidebar and Main Content */}
      <div className="d-flex flex-grow-1">
        <AdminSidebar onSidebarToggle={handleSidebarToggle} />
        <Main isSidebarCollapsed={isSidebarCollapsed} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
