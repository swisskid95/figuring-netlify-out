import React from 'react';
import '@babel/polyfill';
import moxios from 'moxios';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter, history } from 'react-router-dom';
import thunk from 'redux-thunk';
import { userSignupStart, authSignup } from './signup.action';
import { SignupPage, mapDispatchToProps, mapStateToProps } from './index.jsx';

configure({ adapter: new Adapter() });

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

let store = mockStore({});

const response = {
  status: 'success',
  data: {
    firstName: 'Isaac',
    lastName: 'Olayisade',
    email: 'issacolaaf7@gmail.com',
    image:
      'https://res.cloudinary.com/fxola/image/upload/v1562006344/avatar.png',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  }
};

const errorResponse = {
  status: 'fail',
  data: {
    message: 'User exist already'
  }
};

describe('Signup', () => {
  describe('Signup Actions', () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

    it('dispatches userSignupStart action', () => {
      const expectedActions = [{ type: 'USER_SIGNUP_START' }];

      store.dispatch(userSignupStart());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches success action if sign up was successful', done => {
      moxios.stubRequest(
        'https://persephone-backend-staging.herokuapp.com/api/v1/users/signup',
        {
          status: 201,
          response: response
        }
      );
      const userDetails = {
        email: 'iss@gmail.com',
        firstName: 'Isaac',
        lastName: 'Olayisade',
        password: 'Author40'
      };

      const expectedActions = [
        { type: 'USER_SIGNUP_START' },
        {
          type: 'USER_SIGNUP_SUCCESS',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
          authData: {
            ...response.data
          }
        }
      ];
      store = mockStore({});

      store.dispatch(authSignup(userDetails, history)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
      done();
    });

    it('dispatches failure action if sign up failed', done => {
      moxios.stubRequest(
        'https://persephone-backend-staging.herokuapp.com/api/v1/users/signup',
        {
          status: 409,
          response: errorResponse
        }
      );

      const expectedActions = [
        { type: 'USER_SIGNUP_START' },
        { type: 'USER_SIGNUP_FAIL', authError: 'User exist already' }
      ];
      const userDetails = {
        email: 'iss@gmail.com',
        firstName: 'Isaac',
        lastName: 'Olayisade',
        password: 'Author40'
      };

      const pushSpy = { history: { push: jest.fn('/article') } };

      store = mockStore({});
      store.dispatch(authSignup(userDetails, pushSpy)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
      done();
    });
  });

  describe('Signup Page', () => {
    const props = {
      lightTheme: false,
      onClick: jest.fn(),
      signup: jest.fn(),
      handleChange: jest.fn()
    };
    const signupPage = mount(
      <BrowserRouter>
        <SignupPage {...props} handleChange={jest.fn()} />
      </BrowserRouter>
    );
    beforeEach(() => {
      // creates the store with any initial state or middleware needed
      store = mockStore();
    });

    it('should render Signin and simulate a click o signup button', () => {
      signupPage
        .find('.login-button')
        .simulate('submit', { preventDefault() {} });
      expect(props.signup.mock.calls.length).toBe(1);
    });
    it('should show initial state', () => {
      const initialState = {
        signup: {
          token: null,
          error: null,
          userDetails: null,
          loading: false
        },
        theme: {
          theme: 'dark-theme'
        }
      };

      expect(mapStateToProps(initialState).token).toEqual(undefined);
    });
    it('should dispatch action', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).signup();
      expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
    });

    it('should be called with the userDetails in the state as arguments', () => {
      signupPage.find('.signup-firstName').simulate('change', {
        target: { name: 'firstName', value: 'Damilola' }
      });

      signupPage
        .find('.signup-lastName')
        .simulate('change', { target: { name: 'lastName', value: 'Adekoya' } });

      signupPage.find('.signup-email').simulate('change', {
        target: { name: 'email', value: 'blah@gmail.com' }
      }); // fill in password field with cats
      signupPage.find('.signup-password').simulate('change', {
        target: { name: 'password', value: 'Author40' }
      }); // simulate form submission

      signupPage.find('form').simulate('submit', { preventDefault() {} }); // test to see arguments used after its been submitted
      expect(props.signup.mock.calls.length).toBe(1);
    });
  });
});
