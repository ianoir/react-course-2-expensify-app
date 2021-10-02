import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    // Last line "window.__REDUX_DEVTOOLS__EXTENSION__ ........" is used to connect to Devtools in chrome
    return store;
};