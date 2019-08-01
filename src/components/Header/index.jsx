import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index.jsx';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light nav-shadow">
          <div className="container">
            <div className="navbar-logo">
              <Link to="/">
                <h3 className="m-0">Author's Haven</h3>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav ml-auto">
                <Button
                  customClassName="btn btn-success my-sm-0 mr-4"
                  buttonText="Sign Up"
                />

                <Button
                  customClassName="btn btn-outline-success primary-color my-2 my-sm-0"
                  buttonText="Login"
                  isInverse={true}
                />
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
