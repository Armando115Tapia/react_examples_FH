import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);
  /*const incrementar = () => {
    setCounter(counter + 1);
  };*/

  const incrementar = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr></hr>
      <ShowIncrement increment={incrementar}></ShowIncrement>
    </div>
  );
};
