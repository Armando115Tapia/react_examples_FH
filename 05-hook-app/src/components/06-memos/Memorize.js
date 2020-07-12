import React from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  return (
    <>
      <h3>Memorize </h3>
      <hr></hr>
      <h1>
        Counter: <Small value={counter}></Small>
      </h1>
      <button
        onClick={() => {
          increment();
        }}
        className="btn btn-outline-primary"
      >
        +1
      </button>
    </>
  );
};
