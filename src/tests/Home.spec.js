import React from 'react';
import { shallow } from 'enzyme';
import Home from '../views/Home';
import store from '../store';
import findByTestAttribute from '../utilities/tests/findByTestAttribute';

const setUp = () => {
  return shallow(<Home store={store} />);
}

describe('Name of the group', () => {
  it('Should test navbar', () => {
    const component = setUp();
    const nav = findByTestAttribute(component, 'nav');
    const navBar = nav.dive();
    const navigation = findByTestAttribute(navBar, 'navigation');
    expect(navigation).toHaveLength(1);
  });
});