import React, { useContext } from "react";
import TopBar from "./components/TopBar/TopBar";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import InputForm from "./components/InputForm/InputForm";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="container" className={theme}>
      <TopBar />
      <main>
        <InputForm />
        <NotesList />
      </main>
    </div>
  );
}
