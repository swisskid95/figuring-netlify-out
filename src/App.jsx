import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './views/LandingPage/index.jsx';
import LoginPage from './views/LoginPage/index.jsx';
import { Provider } from 'react-redux';
import setupStore from './store';
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
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
