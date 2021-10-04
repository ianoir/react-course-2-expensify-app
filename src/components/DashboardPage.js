// Set up the imports for the React Components
import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />    
        <ExpenseList />
    </div>
);

export default DashboardPage;