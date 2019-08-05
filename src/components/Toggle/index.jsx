import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss';

const Toggle = ({ classToggle, handleClick }) => {
  return (
    <div>
      <div className="toggle-button">
        <button
          className={`${classToggle} toggle`}
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  classToggle: PropTypes.string,
  handleClick: PropTypes.func
};

export default Toggle;
