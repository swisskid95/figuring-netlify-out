import React from 'react';
import { shallow, mount } from 'enzyme';
import * as actionTypes from '../../actionTypes';
import { themeToggler } from './index.action';
import { LandingPage } from './index';

const defaultProps = {
  themeToggler: jest.fn(),
  theme: {}
};

const actionArgs = {
  theme: 'light-theme'
};

describe('Render component', () => {
  it('should create an action ', () => {
    //arrange
    const expectedAction = {
      type: actionTypes.APP_THEME,
      payload: actionArgs
    };
    // act
    const action = themeToggler(actionArgs);
    //assert
    expect(action).toEqual(expectedAction);
  });

  it('should render component successfully', () => {
    const component = shallow(<LandingPage {...defaultProps} />);
    expect(
      component.contains(<h1>Team Persephone - Author's Haven</h1>)
    ).toBeTruthy();
  });

  it('should toggle to light theme', () => {
    const component = mount(<LandingPage {...defaultProps} />);
    component.find('button').simulate('click');
    expect(component.find('button').hasClass('')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it('should toggle to dark theme', () => {
    const component = mount(<LandingPage {...defaultProps} />);
    component.find('button').simulate('click');
    expect(component.find('button').hasClass('switch')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
