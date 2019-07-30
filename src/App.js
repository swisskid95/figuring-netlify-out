import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import { Provider } from 'react-redux';
import setupStore from '../src/store';
import './styles/main.scss';

const store = setupStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ul>
            <li>
              <Link to={'/'}>Landing Page</Link>
            </li>
            <li>
              <Link to={'/login'}>Login Page</Link>
            </li>
          </ul>
          <switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
          </switch>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
