import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './index';

describe('Render component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LandingPage debug />);
    expect(component).toMatchSnapshot();
    expect(
      component.contains(<h1>Team Persephone - Author's Haven</h1>)
    ).toBeTruthy();
  });
});
