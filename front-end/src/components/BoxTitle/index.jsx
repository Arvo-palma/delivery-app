import React from 'react';
import PropTypes from 'prop-types';

import './BoxTitle.css';

function BoxTitle(props) {
  const { title } = props;
  return (
    <p className="box-title">{title}</p>
  );
}

BoxTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BoxTitle;
