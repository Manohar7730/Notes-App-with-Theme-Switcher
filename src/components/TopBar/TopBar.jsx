import React, { useContext } from 'react';
import './TopBar.css';
import { ThemeContext } from '../../context/ThemeContext'; // ✅ import context

export default function TopBar() {
  const { handleTheme } = useContext(ThemeContext);

  return (
    <header id="header">
      <h1>Notes App</h1>
      <button onClick={handleTheme}>Toggle Theme</button>
    </header>
  );
}
