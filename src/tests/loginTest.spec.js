import React from 'react';
import { shallow } from 'enzyme';
import Signin from './../views/Signin';
import store from './../store';
import findTestByAttribute from './../utilities/tests/findByTestAttribute';

const setUp = () => {
  return shallow(<Signin store={store} />).childAt(0).dive().setState({
    isLoading: false
  })
}

describe('Name of the group', () => {
  it('(should render)', () => {
    const component = setUp();
    const fullComp = component.dive()
    const email = findTestByAttribute(fullComp, 'email')

    email.simulate('change', { target: { value: 'myemail.com', name: 'email' } });

    expect(component.state().email).toEqual('myemail.com');
  });

  it('(should render)', () => {
    const component = setUp();
    const fullComp = component.dive()
    const email = findTestByAttribute(fullComp, 'email')

    email.simulate('change', { target: { value: 'myemail.com', name: 'email' } });

    expect(component.state().email).toEqual('myemail.com');
  });

});