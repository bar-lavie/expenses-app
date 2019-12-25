import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

class Settings extends React.Component {
    state = {
        isProfileVisible: false
    };


    handleSwitchChange = name => event => {
        this.setState({...this.state, [name]: event.target.checked});
    };

    render() {
        return (
            <>
                {/* Make it h1 but make it look like h5 */}
                <Typography variant="h5" component="h1" color="textSecondary" gutterBottom>
                    Your profile settings
                </Typography>
                <Card>
                    <CardContent>
                        {/* Make it h2 but make it look like p (no variant) */}
                        <Typography component="h2" color="textSecondary" gutterBottom>
                            Month salary
                        </Typography>

                        <TextField
                            id="outlined-number"
                            label="Total"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />

                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.isProfileVisible}
                                    onChange={this.handleSwitchChange('isProfileVisible')}
                                    value="isProfileVisible"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                    </CardContent>
                </Card>
            </>
        );
    }
}

export default Settings;
