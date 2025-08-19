import React from "react";
import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "../localStorage";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
