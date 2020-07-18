import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgtYdPpgOquAVSnyKJpDVGVlQhj_cdBvyLdw&usqp=CAU)',
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title"> Un nuevo día</p>
        <p className="journal__entry-content"> El contenido de un nuevo día</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
  