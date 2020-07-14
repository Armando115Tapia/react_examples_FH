import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr></hr>
      <button
        onClick={() => {
          setUser({ id: 1234, name: 'Armando' });
        }}
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  );
};
