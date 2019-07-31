import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default hot(module)(App);
