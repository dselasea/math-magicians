import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import Input from './Input';

const Calculator = ({ buttons }) => {
  const [calculation, setCalculation] = useState({ total: 0, next: 0, operation: null });

  const handleCalculation = (e) => {
    const result = calculate(calculation, e.target.name);
    setCalculation(result);
  };

  return (
    <section className="calculator">
      <div className="calculator-title">
        <h1>Let&lsquo;s do some math!</h1>
      </div>
      <div>
        <Input calculation={calculation} />
        <div className="btn-calculator">
          {buttons.map((button) => <button type="button" name={button.btn} onClick={handleCalculation} key={button.id}>{ button.btn }</button>)}
        </div>
      </div>
    </section>
  );
};

Calculator.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      btn: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Calculator;
