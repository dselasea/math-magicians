import React from 'react';

const Calculator = () => {
  const buttonNumbers = [{ id: 1, btn: 'AC' },
    { id: 2, btn: '+/-' },
    { id: 3, btn: '/' },
    { id: 4, btn: '7' },
    { id: 5, btn: '8' },
    { id: 6, btn: '9' },
    { id: 7, btn: '*' },
    { id: 8, btn: '4' },
    { id: 9, btn: '5' },
    { id: 10, btn: '6' },
    { id: 11, btn: '-' },
    { id: 12, btn: '1' },
    { id: 13, btn: '2' },
    { id: 14, btn: '3' },
    { id: 15, btn: '+' },
    { id: 16, btn: '0' },
    { id: 17, btn: '=' },
  ];
  return (
    <div>
      <input type="text" />
      {buttonNumbers.map((button) => <button key={button.id} type="button">{button.btn}</button>)}
    </div>
  );
};

export default Calculator;
