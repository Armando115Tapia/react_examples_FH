import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar></NotesAppBar>
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title--input"
          autoComplete="off"
        ></input>
        <textarea
          placeholder="What happen today??"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgtYdPpgOquAVSnyKJpDVGVlQhj_cdBvyLdw&usqp=CAU"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
