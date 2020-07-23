import React from 'react';
import { JournalEntries } from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { starNewNote } from '../../actions/notes';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // console.log('handle logout');
    dispatch(startLogout());
  };

  const { name } = useSelector((state) => state.auth);

  const handleAddNew = () => {
    // console.log('Hola desde el sidebar component');
    dispatch(starNewNote());
    
  };
  return (
    <aside className="journal__sidebar ">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name}</span>
        </h3>
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </div>
      <div onClick={handleAddNew} className="journal__new--entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5"> New entry</p>
      </div>
      <JournalEntries></JournalEntries>
    </aside>
  );
};
