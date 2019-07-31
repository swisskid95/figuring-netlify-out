import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './index';

describe('Render component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginPage debug />);
    expect(component).toMatchSnapshot();
    expect(
      component.contains(<h1>This is a demo Log in page</h1>)
    ).toBeTruthy();
  });
});
