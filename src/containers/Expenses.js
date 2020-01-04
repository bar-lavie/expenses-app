import React from 'react';
import ListItems from "../components/Expenses/ListItems";
import AddBtn from "../components/Expenses/AddBtn";
import AddDialog from "../components/Expenses/AddDialog";
import Settings from "../components/Expenses/Settings";

import * as actions from '../store/actions/index';


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

    handleFinishAdd = (data) => {
        this.props.onAddExpense();
        this.handleCloseDialog()
    };

    render() {
        return (
            <>
                <Settings/>
                <ListItems/>
                <AddBtn click={this.handleOpenDialog}/>
                <AddDialog close={this.handleCloseDialog} onFinishAdd={this.handleFinishAdd} status={this.state.openDialog}/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        // ings: state.burgerBuilder.ingredients,
        // price: state.burgerBuilder.totalPrice,
        // error: state.burgerBuilder.error,
        // isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onAddExpense: () => dispatch(actions.addExpense ()),
    }
}

export default Expenses;
