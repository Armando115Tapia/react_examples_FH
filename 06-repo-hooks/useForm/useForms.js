import { useState } from 'react';

export const useForms = (initialState = {}) => {
  // Se puede agregar reglas de validacion
  // se puede colocar una bandera para decir cuando el formulario es correcto o cuando no
  // etc
  const [values, setValues] = useState(initialState);

  const reset = (newState = initialState) => {
    setValues(newState);
  };

  const hadleInputChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, hadleInputChange, reset];
};
