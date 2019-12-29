import React from 'react';
import ListItems from "../components/Expenses/ListItems";
import AddBtn from "../components/Expenses/AddBtn";
import AddDialog from "../components/Expenses/AddDialog";
import Settings from "../components/Expenses/Settings";


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
                <Settings/>
                <ListItems/>
                <AddBtn click={this.handleOpenDialog}/>
                <AddDialog close={this.handleCloseDialog} status={this.state.openDialog}/>
            </>
        );
    }
}

export default Expenses;
