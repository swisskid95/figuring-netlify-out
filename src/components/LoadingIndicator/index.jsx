import React from 'react';
import './style.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-text">Loading..</div>
      <div className="loader-sector loader-sector-green"></div>
      <div className="loader-sector loader-sector-grey"></div>
      <div className="loader-sector loader-sector-dark-grey"></div>
    </div>
  );
};

export default Loader;
