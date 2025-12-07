import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchWeather = () => {
  const [searchParams] = useSearchParams();
  const [text, setText] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (text.trim()) {
      navigate(`/weather?q=${encodeURIComponent(text.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setText("");
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={text}
        placeholder="Введіть назву міста..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Пошук
      </button>
    </div>
  );
};

export default SearchWeather;
