import React, { useContext, useEffect, useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import InputForm from "./components/InputForm/InputForm";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div id="container" className={theme}>
      <TopBar />
      <main>
        <InputForm setNotes={setNotes} />
        <NotesList notes={notes} setNotes={setNotes} />
      </main>
    </div>
  );
}
