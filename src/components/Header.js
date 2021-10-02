// Set up the imports for the React Components
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create an new expense</NavLink>
    </header>
);

export default Header;