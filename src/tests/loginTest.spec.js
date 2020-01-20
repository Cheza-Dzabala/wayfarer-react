import React from 'react';
import { shallow } from 'enzyme';
import Signin from './../views/Signin';
import store from './../store';

const setUp = () => {
  return shallow(<Signin store={store} />).childAt(0).dive().setState({
    isLoading: false
  }).setProps({
    status: 'success'
  })
}

describe('Name of the group', () => {
  it('(should render)', () => {
    const component = setUp();
    component.dive()

  });
});