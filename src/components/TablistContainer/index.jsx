import React from 'react';
import PropTypes from 'prop-types';
import './TablistContainer.scss';

/**
 *  Sample Usage
 *  const props = {
 *   lightTheme: true
 *  }
 *  <TablistContainer {...props}>Hello</TablistContainer>
 */
const tablistContainer = props => {
  let themeType = ['dark-theme'];
  if (props.lightTheme) {
    themeType.pop();
    themeType.push('light-theme');
  }
  return (
    <div className="tablist-container">
      <div className={themeType.join(' ')}>{props.children}</div>
    </div>
  );
};

tablistContainer.propTypes = {
  children: PropTypes.any,
  lightTheme: PropTypes.bool
};
export default tablistContainer;
