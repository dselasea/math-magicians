import PropTypes from 'prop-types';
import React from 'react';

function Buttons({ button }) {
  return (
    <button type="button">{ button.btn }</button>
  );
}

Buttons.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Buttons;
