import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   setSearchParams({ q: text });
  // }, [text]);

  const keyDownHandler = (e) => {
    if (e.key === "Enter" && text.trim() != '') {
        navigate(`/search?q=${text}`)
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Search.."
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default Search;
