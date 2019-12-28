import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import SettingsIcon from "@material-ui/icons/Settings";
import ViewListIcon from '@material-ui/icons/ViewList';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: '0 auto',
        position: 'fixed',
        bottom: 0,
        left: 0,
        borderTop: '1px solid ' + theme.palette.primary.main
    },
}));

export default function Navigation() {
    const classes = useStyles();
    let current = null;
    switch (window.location.pathname) {
        case '/settings':
            current = 0;
            break;
        case '/expenses':
            current = 1;
            break;
        case '/calendar':
            current = 2;
            break;
    }
    const [value, setValue] = React.useState(current);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Settings" icon={<SettingsIcon/>} component={Link} to='/settings'/>
            <BottomNavigationAction label="Expenses" icon={<ViewListIcon/>} component={Link} to='/expenses'/>
            <BottomNavigationAction label="Compare" icon={<GroupIcon/>} component={Link} to='/calendar'/>
        </BottomNavigation>
    )
}