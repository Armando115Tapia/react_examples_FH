import React, { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      ></input>
      <button onClick={handleClick} className="btn btn-outline-primary mt-2">
        Focus
      </button>
    </>
  );
};
