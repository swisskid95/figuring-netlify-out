import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './views/LandingPage/index.jsx';
import LoginPage from './views/LoginPage/index.jsx';
import ArticlePage from './views/ArticlePage/index.jsx';
import { Provider } from 'react-redux';
import setupStore from './store';
import './styles/main.scss';
import Header from './components/Header/index.jsx';
import { Button, Form, Col } from 'react-bootstrap';
import Modal from './components/Modal/index.jsx';

import Footer from './components/Footer/index.jsx';

const store = setupStore();
// get app theme
const app_theme = localStorage.getItem('app_theme');
class App extends Component {
  state = {
    articleDetails: [],
    show: false,
    lightTheme: true
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/article" component={ArticlePage} />
          </Switch>

          <Footer app_theme={app_theme} />
          {/* console.log(this);
          articles: {this.state.articleDetails[0]} */}
          <button
            type="button"
            onClick={() => {
              this.handleShow();
              this.onSearchSubmit();
            }}
          >
            Open modal
          </button>
          <Modal
            show={this.state.show}
            lightTheme={this.state.lightTheme}
            handleClose={this.handleClose}
            handleShow={this.handleShow}
          >
            <Form>
              <div>
                <h3>Sample form in a modal</h3>
              </div>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div>
                <Button className="btn-margin" variant="success" type="submit">
                  Submit
                </Button>
                <Button className="btn-margin" variant="success" type="submit">
                  Close
                </Button>
              </div>
            </Form>
          </Modal>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
