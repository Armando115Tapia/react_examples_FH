import React, { useState, useMemo } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/ProcesoPesado';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h3>MemoHook</h3>
      <hr></hr>
      <h3>
        Counter:<small>{counter}</small>
      </h3>
      <p>{memoProcesoPesado}</p>
      <button
        onClick={() => {
          increment();
        }}
        className="btn btn-outline-primary"
      >
        +1
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-outline-secondary"
      >
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
