import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import './Multi.css'

const MultiDropDown = ({ title, optionsArray}) => {
  

  const options_arr =optionsArray;

 

  return (
    <Multiselect
  displayValue="key"
  showArrow = {true}
  placeholder={title}
  options={options_arr}
  avoidHighlightFirstOption={true}
/>
  );
};

export default MultiDropDown;
