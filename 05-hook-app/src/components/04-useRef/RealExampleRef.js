import React, { useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>Real Example ref</h1>
      <hr></hr>
      {show && <MultipleCustomHook></MultipleCustomHook>}

      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => setShow(!show)}
      >
        Show/Hide
      </button>
    </>
  );
};
