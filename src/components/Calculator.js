import PropTypes from 'prop-types';
import React from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

function Calculator({ buttons }) {
  return (
    <div className="container">
      <input type="text" id="input" placeholder="0" readOnly />
      <div className="btn-container">
        {buttons.map((button) => <Buttons button={button} key={button.id} />)}
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
