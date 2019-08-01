import React from 'react';
import PropTypes from 'proptypes';
import './index.scss';

/**
 *  Sample Usage
 *  <IconComponent
 *      src={'./../src/assets/images/twitter-dark.svg'}
 *      alt={'image asset'}
 *      className={'icon-large'}
 *  />
 */
const IconComponent = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};

IconComponent.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default IconComponent;
