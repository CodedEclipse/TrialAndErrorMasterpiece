import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import './Multi.css'

const MultiDropDown = ({ title, optionsArray = [], onChange }) => {
  const handleSelect = (selectedList) => {
      if (onChange) onChange(selectedList); // Pass the selected list to the parent
  };

  return (
      <Multiselect
          displayValue="key"
          showArrow={true}
          placeholder={title || "Select options"}
          options={optionsArray}
          avoidHighlightFirstOption={true}
          onSelect={handleSelect}
          onRemove={handleSelect} // Handle both selection and removal
      />
  );
};


export default MultiDropDown;
