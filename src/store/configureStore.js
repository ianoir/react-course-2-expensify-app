import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    // Last line "window.__REDUX_DEVTOOLS__EXTENSION__ ........" is used to connect to Devtools in chrome
    return store;
};