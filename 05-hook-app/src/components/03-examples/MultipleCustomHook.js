import React from 'react';
import '../02-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHook = () => {
  const stateCounter = useCounter(1);
  const { counter, increment } = stateCounter;
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, data } = useFetch(url);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr></hr>
      {loading ? (
        <div className="alert alert-info text-center">loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
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
