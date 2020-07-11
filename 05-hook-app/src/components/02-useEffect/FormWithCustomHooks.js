import React, { useEffect } from 'react';
import './effects.css';
import { useForms } from '../../hooks/useForms';

export const FormWithCustomHooks = () => {
  const [formValues, handleInputChange] = useForms({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('encryptando la password');
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHooks</h1>
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
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        ></input>
        <button className="btn btn-primary"> Guardar </button>
      </div>
    </form>
  );
};
