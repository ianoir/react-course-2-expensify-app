import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary'; 

// should render a copy of ExpenseSummary with 1 expense totalled
test('should render a copy of ExpenseSummary with 1 expense totalled', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot(); 
});


// should render a copy of ExpenseSummary with multiple expenses totalled
test('should render a copy of ExpenseSummary with multiple expenses totalled', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={20} expensesTotal={23511251} />);
    expect(wrapper).toMatchSnapshot(); 
});