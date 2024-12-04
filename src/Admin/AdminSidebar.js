import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar state
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-light border-end vh-100 ${
        isCollapsed ? 'collapsed-sidebar' : ''
      }`}
      style={{
        width: isCollapsed ? '80px' : '250px',
        transition: 'width 0.3s',
        position: 'fixed',
      }}
    >
      {/* Sidebar Header with Hamburger Icon */}
      <div className="d-flex justify-content-between align-items-center p-3">
        {!isCollapsed && <h4 className="mb-0">Admin</h4>}
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={toggleSidebar}
          style={{ border: 'none', background: 'none', fontSize: '1.5rem' }}
        >
          ☰
        </button>
      </div>

      {/* Sidebar Navigation Links */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/admin/dashboard"
            className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
          >
            <span role="img" aria-label="dashboard">
            <i class="fa-solid fa-gauge"></i>
            </span>{' '}
            {!isCollapsed && 'Dashboard'}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/user-management"
            className={`nav-link ${location.pathname === '/admin/user-management' ? 'active' : ''}`}
          >
            <span role="img" aria-label="users">
            <i class="fa-solid fa-users"></i>
            </span>{' '}
            {!isCollapsed && 'User Management'}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
