import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../containers/LoginPage';

test('LOGIN PAGE COMPONENT TESTING', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('LOGIN NO CLICK DO BOTÃO', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
