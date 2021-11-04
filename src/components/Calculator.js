import React, { useState } from 'react';
import '../components-style/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const numbersHandler = (e) => {
    const { total, next, operation } = state;

    if (!total && !operation) {
      setState({ ...state, total: e.target.innerHTML });
    } else if (total && !operation) {
      setState({ ...state, total: total + e.target.innerHTML });
    } else if (total && operation && !next) {
      setState({ ...state, next: e.target.innerHTML });
    } else {
      setState({ ...state, next: next + e.target.innerHTML });
    }
  };

  const operationHandler = (e) => {
    setState({ ...state, operation: e.target.innerHTML });
  };

  const handleResults = (e) => {
    const calculation = calculate(state, e.target.innerHTML);

    setState(calculation);
  };

  const { total, next, operation } = state;

  return (
    <div className="container" data-testid="Calculator">
      <div className="output">
        {total || 0}
        {operation}
        {next}
      </div>
      <div className="buttons">
        <button type="button" onClick={handleResults}>
          AC
        </button>
        <button type="button" onClick={handleResults}>
          +/-
        </button>
        <button type="button" onClick={operationHandler}>
          %
        </button>
        <button type="button" onClick={operationHandler}>
          ÷
        </button>
        <button type="button" onClick={numbersHandler}>
          7
        </button>
        <button type="button" onClick={numbersHandler}>
          8
        </button>
        <button type="button" onClick={numbersHandler}>
          9
        </button>
        <button type="button" operation="x" onClick={operationHandler}>
          x
        </button>
        <button type="button" onClick={numbersHandler}>
          4
        </button>
        <button type="button" onClick={numbersHandler}>
          5
        </button>
        <button type="button" onClick={numbersHandler}>
          6
        </button>
        <button type="button" operation="-" onClick={operationHandler}>
          -
        </button>
        <button type="button" onClick={numbersHandler}>
          1
        </button>
        <button type="button" onClick={numbersHandler}>
          2
        </button>
        <button type="button" onClick={numbersHandler}>
          3
        </button>
        <button type="button" operation="+" onClick={operationHandler}>
          +
        </button>
        <button
          type="button"
          className="not-equal"
          onClick={numbersHandler}
        >
          0
        </button>
        <button
          type="button"
          onClick={handleResults}
        >
          .
        </button>
        <button
          type="button"
          onClick={handleResults}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
