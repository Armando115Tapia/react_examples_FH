import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid) => {
  const snapNotes = await db.collection(`/${uid}/journal/notes`).get();
  const notes = [];
  snapNotes.forEach((snapHijo) => {
    notes.push({ id: snapHijo.id, ...snapHijo.data() });
  });
  // console.log(notes);
  return notes;
};
