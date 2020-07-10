import React, { useState } from 'react';

import './counter.css';

const CounterApp = (props) => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 60,
    counter4: 70,
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr></hr>
      <button
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1 });
        }}
        className="btn btn-primary"
      >
        +1
      </button>
    </>
  );
};

CounterApp.propTypes = {};

export default CounterApp;
