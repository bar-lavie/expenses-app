import React, {useEffect} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddExpenseFlow from "./AddExpenseFlow";


export default function AddExpenseDialog(props) {

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
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                <AddExpenseFlow/>
            </Dialog>
        </div>
    );
}