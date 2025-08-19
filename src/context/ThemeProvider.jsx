import React, { useState,useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // load theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // save theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}