// Import React, ReactDOM and related components from other libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import Expensify App code from its router file
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';

// Import the redux store and its elements from the related files
import configureStore from './store/configureStore';

// Import the named functions from the actions files
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

// Import the firebase database connection
import { auth, firebase, firebaseAuth } from './firebase/firebase';

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

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebaseAuth.onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});