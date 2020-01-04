import React, {useEffect} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogStepper from "./DialogStepper";


export default function AddDialog(props) {

    const [open, setOpen] = React.useState(props.status);

    useEffect(() => {
        setOpen(props.status);
    }, [props.status]);


    const handleClose = value => {
        setOpen(false);
        props.close()
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Add a new expense</DialogTitle>
                <DialogStepper onFinishAdd={props.handleFinishAdd}/>
            </Dialog>
        </div>
    );
}