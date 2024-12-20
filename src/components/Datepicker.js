import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Multi.css'
function Datepicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        dateFormat="yyyy-MM-dd"
        placeholderText="Click to select a date" 
        onChange={(date) => setStartDate(date)}
        
      />
    );
}

export default Datepicker;