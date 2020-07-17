import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__inut"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="auth__inut"
          autoComplete="off"
          type="text"
          placeholder="email"
          name="email"
        ></input>
        <input
          className="auth__inut"
          type="password"
          placeholder="password"
          name="password"
        ></input>

        <input
          className="auth__inut"
          type="password"
          placeholder="repeat password"
          name="password2"
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
