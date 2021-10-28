import React, { Component } from 'react';
import '../components-style/Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  numbersHandler = (e) => {
    const { total, next, operation } = this.state;

    if (!total && !operation) {
      this.setState({ total: e.target.innerHTML });
    } else if (total && !operation) {
      this.setState({ total: total + e.target.innerHTML });
    } else if (total && operation && !next) {
      this.setState({ next: e.target.innerHTML });
    } else {
      this.setState({ next: next + e.target.innerHTML });
    }
  };

  operationHandler = (e) => {
    this.setState({ operation: e.target.innerHTML });
  };

  handleResults = (e) => {
    const calculation = calculate(this.state, e.target.innerHTML);

    this.setState(calculation);
  };

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="container">
        <div className="output">
          {total || 0}
          {operation}
          {next}
        </div>
        <div className="buttons">
          <button type="button" onClick={this.handleResults}>
            AC
          </button>
          <button type="button" onClick={this.handleResults}>
            +/-
          </button>
          <button type="button" onClick={this.operationHandler}>
            %
          </button>
          <button type="button" onClick={this.operationHandler}>
            ÷
          </button>
          <button type="button" onClick={this.numbersHandler}>
            7
          </button>
          <button type="button" onClick={this.numbersHandler}>
            8
          </button>
          <button type="button" onClick={this.numbersHandler}>
            9
          </button>
          <button type="button" operation="x" onClick={this.operationHandler}>
            x
          </button>
          <button type="button" onClick={this.numbersHandler}>
            4
          </button>
          <button type="button" onClick={this.numbersHandler}>
            5
          </button>
          <button type="button" onClick={this.numbersHandler}>
            6
          </button>
          <button type="button" operation="-" onClick={this.operationHandler}>
            -
          </button>
          <button type="button" onClick={this.numbersHandler}>
            1
          </button>
          <button type="button" onClick={this.numbersHandler}>
            2
          </button>
          <button type="button" onClick={this.numbersHandler}>
            3
          </button>
          <button type="button" operation="+" onClick={this.operationHandler}>
            +
          </button>
          <button type="button" buttonName="0" className="not-equal" onClick={this.numbersHandler}>
            0
          </button>
          <button type="button" buttonName="." onClick={this.handleResults}>
            .
          </button>
          <button type="button" buttonName="=" onClick={this.handleResults}>
            =
          </button>
        </div>
      </div>
    );
  }
}
