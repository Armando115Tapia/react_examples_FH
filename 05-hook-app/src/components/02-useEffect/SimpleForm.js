import React, { useState } from 'react';
import './effects.css';
import { useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey');
  }, []);

  useEffect(() => {
    // console.log('form state cambio');
  }, [formState]);

  useEffect(() => {
    // console.log('se dispara solo cuando el email cambia');
  }, [email]);

  useEffect(() => {
    console.log('Componente montado');
    return () => {
      console.log('Componente desmontado');
    };
  });

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr></hr>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      {name === '123' && <Message></Message>}
    </>
  );
};
