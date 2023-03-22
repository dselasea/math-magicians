import React from 'react';

const Input = (props) => {
  const calc = { props };
  return (
    <div>
      <input type="text" id="input" value={`${calc.props.calculation.total || ''} ${calc.props.calculation.operate || ''} ${calc.props.calculation.next || ''}`} readOnly />
    </div>
  );
};

export default Input;
