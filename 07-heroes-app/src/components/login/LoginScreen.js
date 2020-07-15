import React from 'react';
// El history viene por defecto en las props del react-dom
export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.push('/');
    // el push agrega una pagina nueva al historial
    history.replace('/');
    // el replace sobreescribe el hisotorial
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
