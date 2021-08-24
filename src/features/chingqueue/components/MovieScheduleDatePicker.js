import React from "react";
import { DatePicker } from "antd";
import moment from 'moment';
import '../styles/movieScheduleDatePicker.css';

function MovieScheduleDatePicker(){
    const dateFormatList = ['MMMM DD, YYYY', 'MMMM DD YY'];
    return(
        <React.Fragment>
            <div className="schedule-datePicker-div">
                <h4>Select Date: <DatePicker className="schedule-datePicker" defaultValue={moment()} format={dateFormatList} /></h4>
            </div>
        </React.Fragment>
    )
}

export default MovieScheduleDatePicker;