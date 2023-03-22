import PropTypes from 'prop-types';
import React from 'react';

function Calculator({ buttons }) {
  return (
    <div className="container">
      <input type="text" id="input" placeholder="0" readOnly />
      <div className="btn-container">
        {buttons.map((button) => <button type="button" key={button.id}>{ button.btn }</button>)}
      </div>
    </div>
  );
}

Calculator.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      btn: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Calculator;
