import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    name: null,
    amount: 0,
    description: null,
    error: false,
    building: false
};


const addExpense = (state, action) => {
    const data = action.expenseData;
    const updatedState = {
        name: data.name,
        amount: data.amount,
        description: data.description,
        building: true
    };
    return updateObject(state, updatedState);
};

const removeExpense = (state, action) => {
    const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    });
};


const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EXPENSE:
            return addExpense(state, action);
        case actionTypes.REMOVE_EXPENSE:
            return removeExpense(state, action);
        // case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        // case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;