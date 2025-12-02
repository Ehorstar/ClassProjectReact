import React, { useState, useEffect } from "react";
import "./Task.css";

const Task = () => {
  const [color, setColor] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setColor     (savedTheme);
  }, []);

  useEffect(() => {localStorage.setItem("theme", color);}, [color]);

  return (
      <div>
      <button onClick={() => setColor("dark")}>Dark</button>
      <button onClick={() => setColor("light")}>Light</button>
      <div className={`block theme-${color}`}>Dark/Light</div>
      </div>
  );
};

export default Task;

