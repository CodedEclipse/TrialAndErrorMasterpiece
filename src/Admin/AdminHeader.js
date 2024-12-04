import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to clear authentication (if implemented)
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <header className="bg-primary text-white py-3 px-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Admin Dashboard</h1>
        <nav className="d-none d-md-flex">
          <Link to="/admin/profile" className="btn btn-outline-light me-2">Profile</Link>
          <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
        </nav>
        {/* Hamburger Menu for Smaller Screens */}
        <div className="d-md-none dropdown">
          <button
            className="btn btn-outline-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li><Link to="/admin/profile" className="dropdown-item">Profile</Link></li>
            <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
