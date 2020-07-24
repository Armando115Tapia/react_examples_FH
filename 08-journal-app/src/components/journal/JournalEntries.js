import React from 'react';
import { JournalEntry } from './JournalEntry';
import { useSelector } from 'react-redux';

export const JournalEntries = () => {
  // const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="jounrnal__entries">
      {notes.map((e) => (
        <JournalEntry key={e}></JournalEntry>
      ))}
    </div>
  );
};
