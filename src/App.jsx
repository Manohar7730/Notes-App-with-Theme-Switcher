import React, { useContext } from 'react';
import TopBar from './components/TopBar/TopBar';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="container" className={theme}>
      <TopBar />

    </div>
  );
}
