import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

// Should render header correctly
test('Should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

// Should call startLogout on button click
test('Should call startLogin on button click', () => {
    const logoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={logoutSpy} />);
    wrapper.find('button').simulate('click');

    expect(logoutSpy).toHaveBeenCalled();
});