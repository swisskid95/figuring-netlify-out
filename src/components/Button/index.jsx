import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ customClassName, buttonText, isInverse }) => {
  const buttonTypeClassName = isInverse ? 'button-inverse' : 'button-normal';

  return (
    <button className={`button ${buttonTypeClassName} ${customClassName}`}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  customClassName: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  isInverse: PropTypes.bool
};

export default Button;
