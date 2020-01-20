import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';
import findTestByAttribute from '../utilities/tests/findByTestAttribute';
import Signup from '../views/Signup';

const setUp = () => {
  return shallow(<Signup store={store} />).childAt(0);
}

describe('Name of the group', () => {
  it('(should render)', () => {
    const component = setUp();
    const fullComp = component.dive();
  });
});