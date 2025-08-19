import React, { useState } from "react";
import "./InputForm.css";

export default function InputForm({ setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" && content.trim() === "") {
      alert("title and content cannot be empty");
    } else if (title.trim() === "") {
      alert("title cannot be empty");
    } else if (content.trim() === "") {
      alert("content cannot be empty");
    } else {
      const notes = {
        id: Date.now(),
        title: title,
        content: content,
      };
      setNotes((prevNotes) => [...prevNotes, notes]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
