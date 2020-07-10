import React, { useState } from 'react';
import { useEffect } from 'react';

export const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coors;

  useEffect(() => {
    console.log('Componente montado');
    const mouseMove = (e) => {
      console.log({ X: e.x, Y: e.y });
      setCoors({ x: e.x, y: e.y });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      console.log('Componente desmontado');
      window.removeEventListener('mousemove', mouseMove);
    };
  });

  return (
    <>
      <h3>Eres Genial</h3>
      <hr></hr>
      <h4>coor-X: {x}</h4>
      <h4>coor-Y: {y}</h4>
    </>
  );
};
