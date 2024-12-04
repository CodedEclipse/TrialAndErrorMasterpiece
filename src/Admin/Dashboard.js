import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';

function Dashboard() {
  return (
    <div className="d-flex flex-column vh-100">
      <AdminHeader />
      <div className="d-flex flex-grow-1">
        <AdminSidebar />
        <main
          className="container-fluid"
          style={{ marginLeft: '250px', padding: '20px', transition: 'margin-left 0.3s' }}
        >
          <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
