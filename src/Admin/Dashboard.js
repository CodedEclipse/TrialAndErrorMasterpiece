import React from 'react';
import AdminHeader from './AdminHeader';

function Dashboard() {
  return (
    <div>
      <AdminHeader />
      <main className="container py-4">
        <h2>Welcome to the Admin Dashboard</h2>
        <p>This is the home page of the admin section.</p>
      </main>
    </div>
  );
}

export default Dashboard;
