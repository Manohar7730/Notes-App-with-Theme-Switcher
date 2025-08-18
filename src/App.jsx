import React, { useContext, useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import InputForm from "./components/InputForm/InputForm";

export default function App() {
  const { theme } = useContext(ThemeContext);
    const [notes,setNotes] = useState([]);


  return (
    <div id="container" className={theme}>
      <TopBar />
      <main>
        <InputForm setNotes={setNotes}/>
        <NotesList notes={notes} setNotes={setNotes}/>
      </main>
    </div>
  );
}
