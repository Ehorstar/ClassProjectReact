import React, { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    document.body.classList.remove(`theme-${theme}`);
    document.body.classList.add(`theme-${currentTheme}`);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
