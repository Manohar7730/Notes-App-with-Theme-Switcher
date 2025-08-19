import React, { useState } from "react";
import "./NoteItem.css";

export default function NoteItem({ id, title, content, handleDelete, handleUpdate }) {
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(id, newTitle, newContent);
    setShow(false);
  };

  return (
    <div className="note-item">
      {show ? (
        <div className="update-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder={title}
            />
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder={content}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <div className="note-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      )}

      <div className="controls">
        <button onClick={() => setShow(true)}>✏️</button>
        <button onClick={handleDelete}>❌</button>
      </div>
    </div>
  );
}
