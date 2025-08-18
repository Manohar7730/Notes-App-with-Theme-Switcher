import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesList.css";

export default function NotesList(props) {
  const { notes, setNotes } = props;

  return (
    <div id="notes-list">
      <ul id="notes-list-items">
        {notes.map((note) => (
          <li key={note.id}>
            <NoteItem
              title={note.title}
              content={note.content}
              setNotes={setNotes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
