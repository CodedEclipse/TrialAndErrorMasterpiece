import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import MultiDropDown from '../components/MultiDropDown';
import Dropdownsingle from '../components/Dropdown';
import { get_data, post_data } from '../ApiServices';
import DecryptData from '../utils/Decryption';
import Datepicker from '../components/Datepicker';
import Button from 'react-bootstrap/Button';

function Maketrue() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to track sidebar toggle
    const [arrayState, setArrayState] = useState([]); // State for state dropdown options
    const [yeardata, setYearData] = useState([]); // State for year dropdown options

    const [selectedStates, setSelectedStates] = useState([]); // Selected states
    const [selectedTable, setSelectedTable] = useState(null); // Selected table
    const [selectedYear, setSelectedYear] = useState(null); // Selected year
    const [selectedSeason, setSelectedSeason] = useState(null); // Selected season
    const [selectedTrueBy, setSelectedTrueBy] = useState(null); // Selected true by
    const [selectedDate, setSelectedDate] = useState(null); // Selected date

    const table_array = [
        { key: 'Cultivated Summary Data', cat: 'cultivated_summary_data' },
        { key: 'Aggregate Summary Data', cat: 'aggregate_summary_data' },
        { key: 'Crop Area Data', cat: 'crop_area_data' },
        { key: 'Surveyor Activity Data', cat: 'surveyor_activity_data' },
    ];

    const season_array = [
        { key: 'Rabi', cat: 'Rabi' },
        { key: 'Zaid', cat: 'Zaid' },
        { key: 'Kharif', cat: 'Kharif' },
    ];

    const true_by_array = [
        { key: 'Created At', cat: 'Created At' },
        { key: 'Timestamp', cat: 'Timestamp' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get_data('/admin/get_states', {});
                const response_year = await get_data('/admin/year_list', {});
                const data = DecryptData(response.data.encrypted);
                const year_data = DecryptData(response_year.data.encrypted);
                setArrayState(data.result);
                setYearData(year_data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleMakeSelectionsVisible = async () => {
        try {
            const make_true_body = {
                states: selectedStates,
                table_name: selectedTable,
                year: selectedYear,
                season: selectedSeason,
                true_by: selectedTrueBy,
                date: selectedDate,
            };

            console.log("Payload:", make_true_body); // Debugging
            const make_true_response = await post_data('/admin/make_visible', make_true_body);
            console.log("Response:", make_true_response);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleClearSelections = () => {
        setSelectedStates([]);
        setSelectedTable(null);
        setSelectedYear(null);
        setSelectedSeason(null);
        setSelectedTrueBy(null);
        setSelectedDate(null);
    };

    return (
        <div className="d-flex flex-column vh-100">
            {/* Header */}
            <AdminHeader />

            {/* Sidebar and Main Content */}
            <div className="d-flex flex-grow-1">
                <AdminSidebar onSidebarToggle={setIsSidebarCollapsed} optionsArray={arrayState} />
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
                        <div className="row justify-content-start mt-2">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <MultiDropDown
                                    title="Select State"
                                    optionsArray={arrayState}
                                    onChange={(selected) => setSelectedStates(selected.map(item => item.cat))}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <Dropdownsingle
                                    title="Select Table"
                                    option={table_array}
                                    onChange={(selected) => setSelectedTable(selected.cat)}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <Dropdownsingle
                                    title="Select Year"
                                    option={yeardata}
                                    onChange={(selected) => setSelectedYear(selected.cat)}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <Dropdownsingle
                                    title="Select Season"
                                    option={season_array}
                                    onChange={(selected) => setSelectedSeason(selected.cat)}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <Dropdownsingle
                                    title="Make Visible by"
                                    option={true_by_array}
                                    onChange={(selected) => setSelectedTrueBy(selected.cat)}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <Datepicker onChange={(date) => setSelectedDate(date)} />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <Button
                                    style={{ width: '100%' }}
                                    variant="success"
                                    onClick={handleMakeSelectionsVisible}
                                >
                                    Make Selections Visible
                                </Button>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <Button
                                    style={{ width: '100%' }}
                                    variant="secondary"
                                    onClick={handleClearSelections}
                                >
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
