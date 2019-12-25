import React, {useState} from 'react';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

class Calendar extends React.Component {

    state = {
        date: new Date()
    };

    handleDateChange = (date) => {
        console.log(date)
    }


    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    autoOk
                    variant="static"
                    openTo="month"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                    disableFuture={true}
                    views={['year', 'month']}
                />
            </MuiPickersUtilsProvider>
        );
    }
}

export default Calendar;
