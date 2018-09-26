import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../containers/Header';

test('HEADER COMPONENT TESTING', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('LOGOUT NO CLICK DO BOTÃO', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
