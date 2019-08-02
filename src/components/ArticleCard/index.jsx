import React from 'react';
import PropTypes from 'prop-types';
import './ArticleCard.scss';

// how to make use of the image tag
{
  /* <img src={'../../src/assets/images/react.png'} className="float-left avatarImage" alt="author" /> */
}

const articleCard = props => {
  let cardBodyClass = ['card-body', 'dark-theme'];

  if (props.light) {
    cardBodyClass.pop();
    cardBodyClass.push('light-theme');
  }
  return (
    <div className="card articleCard">
      <img className="card-img-top" src={props.articleImage} alt="article" />
      <div className={cardBodyClass.join(' ')}>
        <h5 className="card-title">{props.articleTitle}</h5>
        <div className="card-text flex">
          <div className="avatar">
            <img
              src={props.authorImage}
              className="float-left avatarImage"
              alt="author"
            />

            <span>
              {props.author}
              <br />
              <small>{props.email}</small>
            </span>
          </div>

          <div className="flex mins-read">
            <small>{props.readTime} read</small>
            <small>ade</small>
          </div>
        </div>
      </div>
    </div>
  );
};

articleCard.propTypes = {
  articleImage: PropTypes.any,
  light: PropTypes.bool,
  articleTitle: PropTypes.any,
  authorImage: PropTypes.any,
  author: PropTypes.string,
  email: PropTypes.any,
  readTime: PropTypes.any
};

export default articleCard;
