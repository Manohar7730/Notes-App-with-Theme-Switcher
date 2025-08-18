import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesList.css";

export default function NotesList() {
  const notes = [
    { id: 1, title: "Note 1", content: "Content for note 1" },
    { id: 2, title: "Note 2", content: "Content for note 2" },
    { id: 3, title: "Note 3", content: "Content for note 3" },
  ];

  return (
    <div id="notes-list">
        <ul id="notes-list-items"> {notes.map((note) => (
          <li key={note.id}>
            <NoteItem title={note.title} content={note.content} />
          </li>
      ))}

        </ul>
     
    </div>
  );
}
