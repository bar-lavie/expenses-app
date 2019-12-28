import React from 'react';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

export default function Calendar() {
    const [date, setDate] = React.useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                autoOk
                variant="static"
                openTo="month"
                value={date}
                onChange={setDate}
                disableFuture={true}
                views={['year', 'month']}
            />
        </MuiPickersUtilsProvider>
    );
}

