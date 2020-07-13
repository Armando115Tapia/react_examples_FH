import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { useForms } from '../../hooks/useForms';
import { TodoList } from './TodoList';

const init = () => {
  // return [{ id: new Date().getTime(), desc: 'Aprender React', done: false }];
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForms({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    //console.log(todoId);
    const action = { type: 'delete', payload: todoId };
    dispatch(action);
  };
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

    const action = { type: 'add', payload: newTodo };
    dispatch(action);
    reset();
  };

  const handleToggle = (todoId) => {
    dispatch({ type: 'toggle', payload: todoId });
  };

  return (
    <>
      <h1>TodoApp ({todos?.length})</h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          ></TodoList>
        </div>
        <div className="col-5">
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
        </div>
      </div>
    </>
  );
};
