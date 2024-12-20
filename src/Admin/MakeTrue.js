import React, { useState,useEffect } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import MultiDropDown from '../components/MultiDropDown';
import Dropdownsingle from '../components/Dropdown';
import {get_data,post_data} from '../ApiServices';
import DecryptData from '../utils/Decryption';
import Datepicker from '../components/Datepicker';
import Button from 'react-bootstrap/Button';

function Maketrue(){
 const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to track sidebar toggle
 const [arrayState, setArrayState] = useState([]); // State to track sidebar toggle

 const [yeardata, setyearData] = useState([]);

 const table_array=[
  {key:'Cultivated Summary Data',cat:'cultivated_summary_data'},
  {key:'Aggregate Summary Data',cat:'aggregate_summary_data'},
  {key:'Crop Area Data',cat:'crop_area_data'},
  {key:'Surveyor Activity Data',cat:'surveyor_activity_data'},
]
 const season_array=[
  {key:'Rabi',cat:'Rabi'},
  {key:'Zaid',cat:'Zaid'},
  {key:'Kharif',cat:'Kharif'}
]
 const true_by_array=[
  {key:'Created At',cat:'Created At'},
  {key:'Timestamp',cat:'Timestamp'}
]

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get_data('/admin/get_states',{});
        const response_year = await get_data('/admin/year_list',{});
        const data = DecryptData(response.data.encrypted);
        const year_data = DecryptData(response_year.data.encrypted);
        setArrayState(data.result);
        setyearData(year_data.result);
        
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

  const handleMakeSelectionsVisible = async () => {
    try{
      const make_true_body={};
      const make_true_response = await post_data('/admin/make_visible', make_true_body);
    }
    catch(error){
        console.log(error)
    }
  }

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
          <div className="card text-center p-3" style={{ marginTop: '20px' }}>
            <div className='row justify-content-start mt-2'>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
              <MultiDropDown title="Select State" optionsArray={arrayState} className="w-100"/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
              <Dropdownsingle title='Select Table'  option={table_array}/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
              <Dropdownsingle title='Select Year'  option={yeardata}/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
              <Dropdownsingle title='Select Season'  option={season_array}/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
              <Dropdownsingle title='Make Visible by'  option={true_by_array}/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
              <Datepicker />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                 <Button style={{ width: "100%" }} variant="success" onClick={handleMakeSelectionsVisible}>
                    Make Selections Visible
                 </Button>
             </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                 <Button style={{ width: "100%" }} variant="secondary">
                    Clear Selections
                 </Button>
             </div>
            </div>
        </div>
        </main>
        </div>  
        <Footer />
      </div>
    );
}


export default Maketrue;