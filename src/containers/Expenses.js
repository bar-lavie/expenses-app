import React from 'react';
import ExpansesList from "../components/ExpansesList";
import AddExpense from "../components/AddExpenseBtn";
import AddExpenseDialog from "../components/AddExpenseDialog";


class Expenses extends React.Component {

    state = {
        openDialog: false
    };

    handleOpenDialog = () => {
        this.setState({
            openDialog: true
        })
    };

    handleCloseDialog = () => {
        this.setState({
            openDialog: false
        })
    };

    render() {
        return (
            <>
                <ExpansesList/>
                <AddExpense click={this.handleOpenDialog}/>
                <AddExpenseDialog close={this.handleCloseDialog} status={this.state.openDialog}/>
            </>
        );
    }
}

export default Expenses;
