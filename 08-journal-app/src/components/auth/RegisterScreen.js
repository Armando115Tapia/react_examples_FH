import React from 'react';
import { Link } from 'react-router-dom';
import { useForms } from '../../hooks/useForms';

import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { starRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
  const initialState = {
    name: 'Armando tapia',
    email: 'armandotapia115@hotmail.com',
    password: '123456',
    password2: '123456',
  };
  const [valuesRegister, handleInputChange] = useForms(initialState);
  const { name, email, password, password2 } = valuesRegister;

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // console.log('Formualario correcto');
      dispatch(starRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      // console.log('name is required');
      dispatch(setError('name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      // console.log('email is invalid');
      dispatch(setError('email is invalid'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      // console.log('password must be equals');
      dispatch(
        setError('password must be equals and more longer than 6 characters')
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const { msgError } = useSelector((state) => state.ui);
  // console.log('msgError: ', msgError);

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error"> {msgError} </div>}

        <input
          className="auth__inut"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        ></input>
        <input
          className="auth__inut"
          autoComplete="off"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        ></input>
        <input
          className="auth__inut"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        ></input>

        <input
          className="auth__inut"
          type="password"
          placeholder="repeat password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        ></input>

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already register?
        </Link>
      </form>
    </>
  );
};
