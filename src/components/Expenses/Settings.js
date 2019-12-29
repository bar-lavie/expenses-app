import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from '@material-ui/core/Grid';

import Calendar from "./Calendar";


export default function Settings(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [content, setContent] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


    const handleSetAnchor = (content) => (e) => {
        setAnchorEl(e.currentTarget)
        setContent(content)
    }


    const handleSetDense = function (e) {
        setDense(e.target.checked)
    }
    const handleSetSecondary = function (e) {
        setSecondary(e.target.checked)
    }

    const getPopoverContent = () => {
        switch (content) {
            case 'calendar':
                return <Calendar/>;
            case 'listSettings':
                return (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={dense}
                                    onChange={handleSetDense}
                                    value="dense"
                                />
                            }
                            label="Enable dense"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={secondary}
                                    onChange={handleSetSecondary}
                                    value="secondary"
                                />
                            }
                            label="Enable secondary text"
                        />
                    </FormGroup>
                );
        }
    }


    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Button aria-describedby={id} variant="outlined" color="secondary"
                            onClick={handleSetAnchor('calendar')}>
                        12/19
                    </Button>
                </Grid>
                <Grid item xs={6} justify={"flex-end"} container={true}>
                    <Button aria-describedby={id} variant="outlined" color="secondary"
                            onClick={handleSetAnchor('listSettings')}>
                        Settings
                    </Button>
                </Grid>
            </Grid>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {getPopoverContent()}
            </Popover>
        </>
    );
}