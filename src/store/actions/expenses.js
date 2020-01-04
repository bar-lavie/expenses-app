import * as actionTypes from './actionTypes';

export const addExpense = ( obj ) => {
    return {
        type: actionTypes.ADD_EXPENSE,
        expenseData: obj
    };
};

export const removeExpense = ( name ) => {
    return {
        type: actionTypes.REMOVE_EXPENSE,
        ingredientName: name
    };
};


