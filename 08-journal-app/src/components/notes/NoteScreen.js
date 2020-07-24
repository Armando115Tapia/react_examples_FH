import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector } from 'react-redux';
import { useForms } from '../../hooks/useForms';

export const NoteScreen = () => {
  // const initialForm = { titleNote: '', contentNote: '', imagenNote: '' };
  // const { titleNote, contentNote } = formValues;

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForms(note);
  const { title, body, url } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content">
      <NotesAppBar></NotesAppBar>
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title--input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        ></input>
        <textarea
          placeholder="What happen today??"
          className="notes__textarea"
          name="content"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {url && (
          <div className="notes__image">
            <img src={`${url}`} alt=""></img>
          </div>
        )}
      </div>
    </div>
  );
};
