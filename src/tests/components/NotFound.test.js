import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFound';

// Should render the not found page
test('should render the not found page', () => {
    const wrapper = shallow(<NotFoundPage /> );
    expect(wrapper).toMatchSnapshot();
});