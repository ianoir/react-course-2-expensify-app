import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

// Should render the dashboard page
test('should render the dashboard page', () => {
    const wrapper = shallow(<DashboardPage /> );
    expect(wrapper).toMatchSnapshot();
});