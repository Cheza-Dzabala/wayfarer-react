import React from 'react';
import { shallow } from 'enzyme';
import Signin from './../views/Signin';
import store from './../store';

const setUp = () => {
  return shallow(<Signin store={store} />).childAt(0).dive().dive();
}

describe('Name of the group', () => {
  it('(should render)', () => {
    const component = setUp();
    console.log(component.debug())
    component.setProps({
      status: 'success'
    })
  });
});