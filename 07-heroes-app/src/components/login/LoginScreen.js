import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
// El history viene por defecto en las props del react-dom
export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // history.push('/');
    // el push agrega una pagina nueva al historial
    // el replace sobreescribe el hisotorial
    const lastPath = localStorage.getItem('lastpath') || '/';

    const action = { type: types.login, payload: { name: 'Armando' } };
    dispatch(action);
    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr></hr>
      <button onClick={handleLogin} className="btn btn-outline-info">
        Login
      </button>
    </div>
  );
};
