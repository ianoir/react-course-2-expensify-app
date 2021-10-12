// Import React, ReactDOM and related components from other libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import Expensify App code from its router file
import AppRouter from './routers/AppRouter';

// Import the redux store and its elements from the related files
import configureStore from './store/configureStore';

// Import the startSetExpense function from the actions file
import { startSetExpenses } from './actions/expenses';

// Import the firebase database connection
import './firebase/firebase';

// Imports the css styles from the styles.css file
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});