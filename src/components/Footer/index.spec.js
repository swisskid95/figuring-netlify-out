import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Render component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer debug />);
    expect(component).toMatchSnapshot();
    expect(component.contains(<h5>Connect with Us</h5>)).toBeTruthy();
  });
});
