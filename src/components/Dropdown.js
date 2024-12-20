import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";

function DropdownSingle({ title ,option}) {
    const [placeTitle, setPlaceTitle] = useState('');
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        if (title) {
            setPlaceTitle(title);
        }
    }, [title]);
    useEffect(() => {
        if (option) {
            setOptions(option)
        }
    }, [option]);
    return (
        <Multiselect
        displayValue="key"
        placeholder={placeTitle}
        options={options}
        disablePreSelectedValues={false}
        avoidHighlightFirstOption={true}
        singleSelect
      />
    );
}

export default DropdownSingle;
