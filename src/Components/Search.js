import React, { useState } from 'react';
import '../Css/Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from 'react-date-range';



export default function Search(){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);    
    }

    return(<div className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>)
}