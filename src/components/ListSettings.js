import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


import Calendar from "./Calendar";


export default function ListSettings(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const handleSetDense = function (e) {
        setDense(e.target.checked)
        // props.
    }
    const handleSetSecondary = function (e) {
        setSecondary(e.target.checked)
    }

    return (
        <div>
            <Button aria-describedby={id} variant="outlined" color="secondary"
                    onClick={event => setAnchorEl(event.currentTarget)}>
                12/19
            </Button>
            <Button aria-describedby={id} variant="outlined" color="secondary"
                    onClick={event => setAnchorEl(event.currentTarget)}>
                Settings
            </Button>
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
                <Calendar/>
            </Popover>
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

            </Popover>
        </div>
    );
}