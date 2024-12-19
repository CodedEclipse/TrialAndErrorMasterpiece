import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import './Multi.css'

const MultiDropDown = ({ title, optionsArray}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const options_arr =optionsArray;

  const onSelect = (selectedList) => {
    setSelectedItems(selectedList);
  };

  const onRemove = (selectedList) => {
    setSelectedItems(selectedList);
  };

  return (
    <Multiselect
  displayValue="key"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  placeholder={title}
  options={options_arr}
/>
  );
};

export default MultiDropDown;
