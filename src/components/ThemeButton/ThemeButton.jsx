import React from "react";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import "./ThemeButton.css";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme} className="btn-icon">
        {theme === "light" ? <SunOutlined /> : <MoonOutlined />}
      </button>
    </div>
  );
};

export default ThemeButton;
 