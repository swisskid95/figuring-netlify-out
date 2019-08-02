import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { themeToggler } from './index.action';
import Toggle from '../../components/Toggle/index.jsx';
import './LandingPage.scss';

export class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: 'switch',
      theme: 'light-theme'
    };
    this.handleClick = this.handleClick.bind(this);
    this.app_theme = localStorage.getItem('app_theme');
  }

  componentWillMount() {
    // dispatch an action
    this.props.themeToggler(this.app_theme);
    document.body.classList.toggle(this.app_theme);
    // update state
    this.app_theme === 'light-theme'
      ? this.setState({ toggle: '', theme: 'dark-theme' })
      : '';
  }

  handleClick() {
    document.body.classList.toggle('light-theme');
    this.state.toggle === 'switch'
      ? this.setState({ toggle: '', theme: 'dark-theme' })
      : this.setState({ toggle: 'switch', theme: 'light-theme' });
    this.props.themeToggler(this.state.theme);
    // store user preference
    localStorage.setItem('app_theme', this.state.theme);
  }
  render() {
    const { toggle } = this.state;
    const { theme } = this.props.theme;
    return (
      <div className={`${theme} landingPage`}>
        <div className="App">
          <h1>Team Persephone - Author's Haven</h1>
          <div className="perse-phone">Team Perse-phone is the Best!!!</div>
        </div>
        <h1>This is a demo Landing page</h1>
        <Toggle classToggle={toggle} handleClick={this.handleClick} />
      </div>
    );
  }
}

LandingPage.propTypes = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.object
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(
  mapStateToProps,
  { themeToggler }
)(LandingPage);
