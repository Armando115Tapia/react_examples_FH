import React from 'react';
import { useForms } from '../../hooks/useForms';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForms({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h4>Agregar TODO </h4>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="btn btn-primary mt-1 btn-block">
          Agregar
        </button>
      </form>
    </>
  );
};
