import React from 'react';
import './Notes.css';

const Notes = () => {
  const notesData = [
    { icon: 'java', name: 'Java Notes', link: '/java-notes.pdf' },
    { icon: 'react', name: 'React.js Notes', link: '/react-notes.pdf' }, // Added React.js Notes
    { icon: 'git', name: 'Git & GitHub Notes', link: '/git-github-notes.pdf' }, // Added Git & GitHub Notes
    { icon: 'flutter', name: 'Flutter Notes', link: '/flutter-notes.pdf' }, // Added Flutter Notes
    { icon: '', name: 'upcoming', link: '/flutter-notes.pdf' }, // Added Flutter Notes
  ];

  return (
    <div className="notes-page">
      <h1 className="title">Download Notes by SR-coder</h1>
      <div className="notes-grid">
        {notesData.map((note, index) => (
          <div className="note-card" key={index}>
            <div className={`icon ${note.icon}`}></div>
            <h3>{note.name}</h3>
            <p>Download Notes Here</p>
            <div className="buttons">
              <a href={note.link} className="btn" download>PDF Notes</a>
              <a href={note.link} className="btn">Chapterwise Notes</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
