/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconComponent from '../../components/IconComponent/index.jsx';
import Input from '../../components/Input/index.jsx';
import Button from '../../components/Button/index.jsx';
import { authSignup } from './signup.action';
import Loading from '../../components/LoadingIndicator/index.jsx';
import '../../styles/main.scss';
import './signup.scss';

export class SignupPage extends Component {
  state = {
    userData: {
      firstName: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'First Name',
          required: true
        },
        value: '',
        validation: {
          required: true,
          string: true
        },
        valid: true
      },
      lastName: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Last Name',
          required: true
        },
        value: '',
        validation: {
          required: true,
          string: true
        },
        valid: true
      },
      email: {
        elementtype: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
          required: true
        },
        value: '',
        validation: {
          required: true,
          email: true
        },
        valid: true
      },
      password: {
        elementtype: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password',
          required: true
        },
        value: '',
        validation: {
          required: true,
          minLength: 8,
          password: true
        },
        valid: true
      }
    }
  };

  handleChange = (event, inputName) => {
    const { userData } = this.state;
    const updatedUserData = {
      ...userData
    };

    const updatedFormElement = {
      ...updatedUserData[inputName]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedUserData[inputName] = updatedFormElement;

    this.setState({ userData: updatedUserData });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userData } = this.state;
    const inputNames = Object.keys(userData);
    const loginDetails = {};
    inputNames.forEach(name => {
      loginDetails[name] = userData[name].value;
    });

    this.props.signup(loginDetails, this.props.history);
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.password) {
      const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
      isValid = pattern.test(value) && isValid;
    }
    if (rules.string) {
      const letters = /^[A-Za-z]+$/;
      isValid = value.match(letters) && isValid;
    }
    if (rules.email) {
      const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      isValid = value.match(email) && isValid;
    }

    return isValid;
  };

  render() {
    const { userData } = this.state;
    const InputNames = Object.keys(userData);

    const formElementsArray = [];

    InputNames.forEach(input => {
      formElementsArray.push({
        id: input,
        config: userData[input]
      });
    });

    let signUpButton = <Button customClassName="login-button">Sign Up</Button>;

    if (this.props.loading) {
      signUpButton = <Loading />;
    }

    return (
      <div className="container signup">
        <h1>Create an Account</h1>
        <div className="main-section-signup row ">
          <div className="hero-panel-signup col-md-6">
            <IconComponent
              src={'./../src/assets/images/authhero.svg'}
              alt={'image asset'}
            />
            <h5 className={this.props.lightTheme ? '' : 'light-signup-hero'}>
              Have an account already?{' '}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </h5>
          </div>
          <form
            className="login input-panel-signup col-md-6"
            onSubmit={this.handleSubmit}
          >
            <div>
              {this.state.userData.firstName.valid && !this.props.error ? (
                ''
              ) : (
                <span className="input-validation-error">
                  <p className="input-error-message-front-end">
                    {this.state.userData.firstName.valid
                      ? ''
                      : 'first name can not be empty and cannot contain a number'}
                  </p>
                  {this.props.error
                    ? `${this.props.error.firstName || ''}`
                    : ''}
                </span>
              )}
              <Input
                placeholder="First Name"
                handleChange={e => this.handleChange(e, 'firstName')}
                customClassName="signup-input signup-firstName col-sm-12"
                name="firstName"
                type="text"
                required
                lightTheme={this.props.lightTheme}
              />
            </div>
            <div>
              {this.state.userData.lastName.valid && !this.props.error ? (
                ''
              ) : (
                <span className="input-validation-error">
                  <p className="input-error-message-front-end">
                    {this.state.userData.lastName.valid
                      ? ''
                      : 'last name can not be empty and cannot contain a number'}
                  </p>
                  {this.props.error ? `${this.props.error.lastName || ''}` : ''}
                </span>
              )}
              <Input
                placeholder="Last Name"
                handleChange={e => this.handleChange(e, 'lastName')}
                customClassName="signup-input signup-lastName col-sm-12"
                name="lastName"
                type="text"
                required
                lightTheme={this.props.lightTheme}
              />
            </div>
            <div>
              {this.state.userData.email.valid && !this.props.error ? (
                ''
              ) : (
                <span className="input-validation-error">
                  <p className="input-error-message-front-end">
                    {this.state.userData.email.valid
                      ? ''
                      : 'email must be a valid email'}
                  </p>
                  {this.props.error ? `${this.props.error.email || ''}` : ''}
                </span>
              )}
              <Input
                placeholder="Email"
                handleChange={e => this.handleChange(e, 'email')}
                customClassName="signup-input signup-email col-sm-12"
                name="email"
                type="email"
                required
                lightTheme={this.props.lightTheme}
              />
            </div>
            <div>
              {this.state.userData.password.valid && !this.props.error ? (
                ''
              ) : (
                <span className="input-validation-error">
                  <p className="input-error-message-front-end">
                    {this.state.userData.password.valid
                      ? ''
                      : 'password must contain one capital letter, number and min of 6'}
                  </p>
                  {this.props.error ? `${this.props.error.password || ''}` : ''}
                </span>
              )}
              <Input
                placeholder="Password"
                handleChange={e => this.handleChange(e, 'password')}
                customClassName="signup-input signup-password col-sm-12"
                name="password"
                type="password"
                required
                lightTheme={this.props.lightTheme}
              />
            </div>
            {signUpButton}
            <span className="horizontal-line">
              <hr className="line" /> <p>Or</p> <hr className="line" />
            </span>

            <div className="social-auth signup-auth">
              <Button customClassName="login-button-twitter">
                <IconComponent
                  src={'../../src/assets/images/twitter-signup.svg'}
                  alt={'twitter asset'}
                />
                <h5>Sign In With Twitter</h5>
              </Button>
              <Button customClassName="login-button-facebook">
                <IconComponent
                  src={'../../src/assets/images/facebook-signup.svg'}
                  alt={'facebook asset'}
                />
                <h5>Sign In With Facebook</h5>
              </Button>
              <Button customClassName="login-button-google">
                <IconComponent
                  src={'../../src/assets/images/google-signup.svg'}
                  alt={'twitter asset'}
                />{' '}
                <h5>Sign In With Google</h5>
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  signup: PropTypes.func,
  lightTheme: PropTypes.bool,
  loading: PropTypes.bool,
  history: PropTypes.any,
  error: PropTypes.object
};
export const mapStateToProps = state => {
  return {
    lightTheme: state.theme.theme === 'light-theme',
    loading: state.signup.loading,
    noError: state.signup.error === null,
    error: state.signup.error
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    signup: (userDetails, history) => dispatch(authSignup(userDetails, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
