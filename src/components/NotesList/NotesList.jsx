import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesList.css";

export default function NotesList({ notes, setNotes }) {

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleUpdate = (id, updatedTitle, updatedContent) => {
    if(updatedTitle.trim()===""&&updatedContent.trim()===""){
      alert("title and content cannot be empty")
    }else if(updatedTitle.trim()===""){
      alert("title cannot be empty")
    }else if(updatedContent.trim()===""){
      alert("content cannot be empty")
    }else{
      setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: updatedTitle || note.title, content: updatedContent || note.content }
          : note
      )
    );
    }
    
  };

  return (
    <div id="notes-list">
      <ul id="notes-list-items">
        {notes.map((note) => (
          <li key={note.id}>
            <NoteItem
              id={note.id}
              title={note.title}
              content={note.content}
              handleDelete={() => handleDelete(note.id)}
              handleUpdate={handleUpdate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
