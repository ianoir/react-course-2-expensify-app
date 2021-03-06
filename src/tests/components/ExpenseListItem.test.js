import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

// Should render an instance of the Expense List Item with a given expense
test('should render an expense list item', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[0].id} {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});