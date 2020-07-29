import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const handlePictureUpload = () => {
    console.log('Le dio click al input');
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const { active: note } = useSelector((state) => state.notes);
  const handleSaveClick = () => {
    //    console.log(note);
    dispatch(startSaveNote(note));
    
  };
  return (
    <div className="notes__appbar">
      <input
        id="fileSelector"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      ></input>
      <span> 28 de agosto</span>
      <div>
        <button onClick={handlePictureUpload} className="btn">
          Picture
        </button>
        <button onClick={handleSaveClick} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
