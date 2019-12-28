import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        right: theme.spacing(3),
        bottom: theme.spacing(10)
    }
}));

export default function AddExpenses(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add" onClick={props.click}>
                <AddIcon/>
            </Fab>
        </div>
    );
}
