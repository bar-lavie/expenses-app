import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['What was the expense?', 'What was the amount?', 'Give it a description?'];
}


export default function DialogStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [stepsValue, setStepsValue] = React.useState([]);

    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleFinish = () => {
        props.onFinishAdd(stepsValue)
    };


    const handleFieldInput = (e) => {
        setStepsValue({
            ...stepsValue,
            [e.target.name]: e.target.value
        });
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <TextField
                        required
                        name='name'
                        id="outlined-required"
                        label="Required"
                        placeholder="e.g. Food"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={stepsValue['name']}
                        onChange={handleFieldInput}
                    />
                );
            case 1:
                return (
                    <TextField
                        required
                        name='amount'
                        id="outlined-required"
                        label="Required"
                        placeholder="e.g. 100"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={stepsValue['amount']}
                        onChange={handleFieldInput}
                    />
                );
            case 2:
                return (
                    <TextField
                        required
                        name='description'
                        id="outlined-required"
                        label="Required"
                        placeholder="Hello World"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={stepsValue['description']}
                        onChange={handleFieldInput}
                    />
                );
            default:
                return 'Unknown step';
        }
    }


    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index)}
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}