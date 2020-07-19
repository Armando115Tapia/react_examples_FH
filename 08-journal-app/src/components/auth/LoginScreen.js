import React from 'react';
import { Link } from 'react-router-dom';
import { useForms } from '../../hooks/useForms';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const initialForm = { email: '', password: '' };
  const [formValues, handleInputChange] = useForms(initialForm);
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345, 'Armando'));
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
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
        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <hr></hr>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link " to="/auth/register">
          {' '}
          Create new account{' '}
        </Link>
      </form>
    </>
  );
};
