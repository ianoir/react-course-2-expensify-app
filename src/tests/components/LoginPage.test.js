import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage component correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

// Should call startLogin on button click
test('Should call startLogin on button click', () => {
    const loginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={loginSpy} />);
    wrapper.find('button').simulate('click');

    expect(loginSpy).toHaveBeenCalled();
});