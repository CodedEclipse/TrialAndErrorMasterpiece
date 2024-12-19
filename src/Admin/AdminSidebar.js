import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './assets/css/admin.css';

function AdminSidebar({ onSidebarToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to track sidebar collapse
  const location = useLocation();

  const toggleSidebar = () => {
    const newState = !isCollapsed; // Toggle the sidebar state
    setIsCollapsed(newState);
    onSidebarToggle(newState); // Notify parent about the new state
  };

  return (
    <div
      className={`bg-light border-end vh-100 ${
        isCollapsed ? 'collapsed-sidebar' : ''
      }`}
      style={{
        width: isCollapsed ? '65px' : '250px',
        transition: 'width 0.3s',
        position: 'fixed',
      }}
    >
      {/* Sidebar Header */}
      <div className="d-flex justify-content-between align-items-center p-3">
        {!isCollapsed && <h4 className="mb-0">Admin</h4>}
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={toggleSidebar}
          style={{
            border: 'none',
            background: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          {isCollapsed ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className={`fa-solid fa-xmark ${!isCollapsed ? 'rotate-icon' : ''}`}></i>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/admin/dashboard"
            className={`nav-link ${
              location.pathname === '/admin/dashboard' ? 'active' : ''
            }`}
          >
            <i className="fa-solid fa-gauge"></i> {!isCollapsed && 'Dashboard'}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/user-management"
            className={`nav-link ${
              location.pathname === '/admin/user-management' ? 'active' : ''
            }`}
          >
            <i className="fa-solid fa-users"></i> {!isCollapsed && 'User Management'}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/maketrue"
            className={`nav-link ${
              location.pathname === '/admin/maketrue' ? 'active' : ''
            }`}
          >
            <i className="fa-solid fa-users"></i> {!isCollapsed && 'Make True'}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
