import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForms } from '../../hooks/useForms';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
  // const initialForm = { titleNote: '', contentNote: '', imagenNote: '' };
  // const { titleNote, contentNote } = formValues;

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForms(note);
  const { title, body, id } = formValues;
  const dispatch = useDispatch();

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, formValues));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

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
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img src={`${note.url}`} alt=""></img>
          </div>
        )}
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete a note{' '}
      </button>
    </div>
  );
};
