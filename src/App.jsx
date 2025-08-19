import React, { useContext } from "react";
import TopBar from "./components/TopBar/TopBar";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import InputForm from "./components/InputForm/InputForm";
import { useLocalStorage } from "./localStorage";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const [notes, setNotes] = useLocalStorage('notes',[]);
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
