import React from 'react';
import ExpansesList from "../components/ExpensesList";
import AddExpense from "../components/AddExpenseBtn";
import AddExpenseDialog from "../components/AddExpenseDialog";
import ListSettings from "../components/ListSettings";


class Expenses extends React.Component {

    state = {
        openDialog: false,
        withDescription: false,
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
                <ListSettings/>
                <ExpansesList/>
                <AddExpense click={this.handleOpenDialog}/>
                <AddExpenseDialog close={this.handleCloseDialog} status={this.state.openDialog}/>
            </>
        );
    }
}

export default Expenses;
