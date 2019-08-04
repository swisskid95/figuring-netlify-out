import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Footer from './index';

describe('Render component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer debug />);
    expect(component).toMatchSnapshot();
    expect(component.contains(<h5>Connect with Us</h5>)).toBeTruthy();
  });
  const app_theme = 'light-theme';
  it('should have Icon rendered', () => {
    const component = mount(
      <BrowserRouter>
        <Footer app_theme={app_theme} />
      </BrowserRouter>
    );
    expect(
      component.contains(
        <img src="./../src/assets/images/google-plus.svg" alt="google plus" />
      )
    ).toBeTruthy();
  });
});
