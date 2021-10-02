// Set up the imports for the React Components
import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

// Set up the imports for the individual Page components
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage'; // The main home page of the app
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound'; // Error 404 page

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>   
    </BrowserRouter>
);

export default AppRouter;