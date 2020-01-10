import React from 'react';
import { shallow } from 'enzyme';
import Signin from './../views/Signin';


const setUp = () => {
  return shallow(<Signin />);
}

describe('Name of the group', () => {
  it('(should render)', () => {
    const component = setUp();
    console.log(component.debug());
  });
});