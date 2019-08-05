import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({
  customClassName,
  buttonText,
  customChildren,
  isInverse,
  handleclick
}) => {
  const buttonTypeClassName = isInverse ? 'button-inverse' : 'button-normal';
  const buttonChild = customChildren ? customChildren : buttonText;
  return (
    <button
      className={`button ${buttonTypeClassName} ${customClassName} `}
      onClick={handleclick}
    >
      {buttonChild}
    </button>
  );
};

Button.propTypes = {
  customClassName: PropTypes.string,
  buttonText: PropTypes.string,
  customChildren: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isInverse: PropTypes.bool,
  handleclick: PropTypes.func
};

export default Button;
