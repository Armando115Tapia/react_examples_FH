import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => {
  // return [{ id: new Date().getTime(), desc: 'Aprender React', done: false }];
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    //console.log(todoId);
    const action = { type: 'delete', payload: todoId };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({ type: 'toggle', payload: todoId });
  };

  const handleAddTodo = (newTodo) => {
    const action = { type: 'add', payload: newTodo };
    dispatch(action);
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
          <TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
