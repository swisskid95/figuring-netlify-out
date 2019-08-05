import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Render component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header debug />);
    expect(component).toMatchSnapshot();
    expect(
      component.contains(<h3 className="m-0">Author's Haven</h3>)
    ).toBeTruthy();
  });
});
