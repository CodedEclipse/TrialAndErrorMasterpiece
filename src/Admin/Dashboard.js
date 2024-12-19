import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';


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
        <main
        className={`container-fluid background_color ${
          isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'
        }`}
        style={{
          marginLeft: isSidebarCollapsed ? '65px' : '250px',
          transition: 'margin-left 0.3s',
        }}
      >
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
