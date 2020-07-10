import React from 'react';
// import PropTypes from 'prop-types'
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

const CounterWithCustomHook = (props) => {
  const initialCount = 135;
  const { state, increment, decrement, reset } = useCounter(initialCount);

  return (
    <>
      <h1>Counter with hooks: {state}</h1>
      <hr></hr>
      <button
        onClick={() => {
          increment(2);
        }}
        className="btn btn-primary"
      >
        {' '}
        +1{' '}
      </button>
      <button
        onClick={() => {
          decrement(2);
        }}
        className="btn btn-secondary"
      >
        {' '}
        -1{' '}
      </button>
      <button
        onClick={() => {
          reset();
        }}
        className="btn btn-info"
      >
        Reset
      </button>
    </>
  );
};

CounterWithCustomHook.propTypes = {};

export default CounterWithCustomHook;
