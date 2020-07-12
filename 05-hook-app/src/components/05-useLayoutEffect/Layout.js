import React, { useLayoutEffect, useRef } from 'react';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {
  const stateCounter = useCounter(1);

  const pTag = useRef();

  const { counter, increment } = stateCounter;
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data } = useFetch(url);    
  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <>
      <h1>Layout Effect</h1>
      <hr></hr>

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <button
        className="btn btn-info"
        onClick={() => {
          increment();
        }}
      >
        {' '}
        Siguiente quote
      </button>
    </>
  );
};
