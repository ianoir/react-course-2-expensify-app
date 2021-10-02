// Import React, ReactDOM and related components from other libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import Expensify App code from its router file
import AppRouter from './routers/AppRouter';

// Import the redux store and its elements from the related files
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

// Imports the css styles from the styles.css file
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

/*
// log items to the console
// A subscribe call to automatically update the screen when data changes
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    // Prints the current state to the console whenever data is updated
});
*/
// These calls are used to create example expenses
store.dispatch(addExpense({ description: 'Water bill', amount: 10000, createdAt: 10000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 20000, createdAt: 5000}));
store.dispatch(addExpense({ description: 'Rent bill', amount: 500000, createdAt: 7000}));
/*
// Used to test connectivity and functionality
store.dispatch(setTextFilter('gas'));
setTimeout(() => {
    store.dispatch(setTextFilter('water'));
}, 3000);
*/

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));