import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("0");
  const [prevInput, setPrevInput] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumber = (num) => {
    if (input === "0" || (operator && input === prevInput)) {
      setInput(num);
    } else {
      setInput(input + num);
    }
  };

  const handleOperator = (op) => {
    if (operator) {
      setPrevInput(eval(prevInput + operator + input));
      setInput(eval(prevInput + operator + input));
    } else {
      setPrevInput(input);
      setInput(input);
    }
    setOperator(op);
  };

  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput(input + '.');
    }
  };

  const handleClear = () => {
    setInput("0");
    setPrevInput("");
    setOperator("");
  };

  const handleEquals = () => {
    if (operator) {
      setInput(eval(prevInput + operator + input));
      setPrevInput("");
      setOperator("");
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">{input}</div>
      <button id="clear" onClick={handleClear}>C</button>
      <button id="divide" onClick={() => handleOperator('/')}>/</button>
      <button id="multiply" onClick={() => handleOperator('*')}>*</button>
      <button id="subtract" onClick={() => handleOperator('-')}>-</button>
      <button id="seven" onClick={() => handleNumber('7')}>7</button>
      <button id="eight" onClick={() => handleNumber('8')}>8</button>
      <button id="nine" onClick={() => handleNumber('9')}>9</button>
      <button id="add" onClick={() => handleOperator('+')}>+</button>
      <button id="four" onClick={() => handleNumber('4')}>4</button>
      <button id="five" onClick={() => handleNumber('5')}>5</button>
      <button id="six" onClick={() => handleNumber('6')}>6</button>
      <button id="one" onClick={() => handleNumber('1')}>1</button>
      <button id="two" onClick={() => handleNumber('2')}>2</button>
      <button id="three" onClick={() => handleNumber('3')}>3</button>
      <button id="zero" onClick={() => handleNumber('0')}>0</button>
      <button id="decimal" onClick={handleDecimal}>.</button>
      <button id="equals" onClick={handleEquals}>=</button>
    </div>
  );
};

export default App;
