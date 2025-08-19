import React, { useState, useRef } from "react";
import "./InputForm.css";

export default function InputForm({ setNotes }) {
  const titleRef = useRef(null); // ref for the input element
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const titleValue = titleRef.current.value.trim();
    const contentValue = content.trim();

    if (titleValue === "" && contentValue === "") {
      alert("Title and content cannot be empty");
      return;
    }
    if (titleValue === "") {
      alert("Title cannot be empty");
      return;
    }
    if (contentValue === "") {
      alert("Content cannot be empty");
      return;
    }

    const note = {
      id: Date.now(),
      title: titleValue,
      content: contentValue,
    };
console.log(note);

    setNotes((prevNotes) => [...prevNotes, note]);

    // clear inputs
    titleRef.current.value = "";
    setContent("");

    // refocus title input
    titleRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        ref={titleRef} // ✅ ref points to the DOM element
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
