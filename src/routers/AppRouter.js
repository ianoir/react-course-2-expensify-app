// Set up the imports for the React Components
import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Set up the imports for the individual Page components
import LoginPage from '../components/LoginPage'; // Shown on first load if user is not authenticated
import DashboardPage from '../components/DashboardPage'; // The main home page of the app
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFound'; // Error 404 page
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;