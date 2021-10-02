// Set up the imports for the React Components
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage = () => (
    <div>
        <ExpenseListFilters />    
        <ExpenseList />
    </div>
);

export default DashboardPage;