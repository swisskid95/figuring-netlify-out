import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { themeToggler } from './index.action';
import Toggle from '../../components/Toggle/index.jsx';
import './LandingPage.scss';
import articleCard from '../../components/ArticleCard/index.jsx';
import axios from 'axios';

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

  async fetchArticles() {
    const res = await axios.get(
      'http://persephone-backend-staging.herokuapp.com/api/v1/articles',
      {
        // header: {
        //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoibGVlbWFyQG1haWwuY29tIiwicm9sZVR5cGUiOiJhdXRob3IiLCJpYXQiOjE1NjUwNzA3MTUsImV4cCI6MTU2NTExMzkxNX0.vHTpfegGpuK9bpACxEh7CiuWnF1eI-UGseGepJl6FHY'
        // }
      }
    );
    console.log(res.data.data.allArticles);
    //    articles = res.data.data.allArticles;
    //this.setState({articleDetails:res.data.data.allArticles});
    //console.log(this.state.articleDetails.description);
  }
  async componentDidMount() {
    //articles = await axios.get('http://persephone-backend-staging.herokuapp.com/api/v1/articles');
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

  // generateArticleCards () {
  //   console.log(articles);
  //   return (
  //     articles ? articles.data.data.allArticles.map(article => {
  //       <articleCard
  //         articleImage={article.image}
  //         light={this.state.theme}
  //         articleTitle={article.articleTitle}
  //         authorImage={article.author.image}
  //         author={`${article.author.firstName} ${article.author.lastName}`}
  //         email={article.author.email}
  //         readTime={article.readTime}
  //       />
  //     })
  //     : <h1>No articles on this page</h1>
  //   )
  // }
  render() {
    const { toggle } = this.state;
    const { theme } = this.props.theme;
    const articles = async () =>
      await axios.get(
        'http://persephone-backend-staging.herokuapp.com/api/v1/articles'
      );
    return (
      <div className={`${theme} landingPage`}>
        <div className="App">
          <h1>Team Persephone - Author's Haven</h1>
          <div className="perse-phone">Team Perse-phone is the Best!!!</div>
        </div>
        <h1>This is a demo Landing page</h1>
        <Toggle classToggle={toggle} handleClick={this.handleClick} />
        {articles.data &&
          articles.data.data.allArticles.map(article => {
            <articleCard
              articleImage={article.image}
              light={this.state.theme}
              articleTitle={article.articleTitle}
              authorImage={article.author.image}
              author={`${article.author.firstName} ${article.author.lastName}`}
              email={article.author.email}
              readTime={article.readTime}
            />;
          })}
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
