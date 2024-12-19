import React, { useState,useEffect } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import MultiDropDown from '../components/MultiDropDown'
import {get_data} from '../ApiServices';
import DecryptData from '../utils/Decryption';

function Maketrue(){
 const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to track sidebar toggle
 const [arrayState, setArrayState] = useState([]); // State to track sidebar toggle
 const [data, setData] = useState([]);
 
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get_data('/admin/get_states',{});
        const data = DecryptData(response.data.encrypted);
        console.log(data.result);
        setArrayState(data.result);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 

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
          <AdminSidebar onSidebarToggle={handleSidebarToggle} optionsArray={arrayState}/>
          <main
          className={`container-fluid background_color ${
            isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'
          }`}
          style={{
            marginLeft: isSidebarCollapsed ? '65px' : '250px',
            transition: 'margin-left 0.3s',
          }}
        >
          <div className="card text-center" style={{ marginTop: '20px' }}>
          <MultiDropDown title="Select State" optionsArray={arrayState}/>
          <div className="card-body" >
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           </div>
        </div>
        </main>
        </div>
  
        {/* Footer */}
        <Footer />
      </div>
    );
}


export default Maketrue;