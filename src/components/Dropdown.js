import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";

function DropdownSingle({ title, option, onChange }) {
    const handleSelect = (selectedList, selectedItem) => {
        if (onChange) onChange(selectedItem); // Pass the selected item to the parent
    };

    return (
        <Multiselect
            displayValue="key"
            placeholder={title || "Select an option"}
            options={option || []}
            singleSelect
            onSelect={handleSelect}
        />
    );
}


export default DropdownSingle;
