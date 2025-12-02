import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const clickHandler = () => {
    if (title.trim().length === 0) {
      setTitleError(true);
      return;
    }
    addTask(title);
    setTitleError(false);
    setTitle("");
  };

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="form">
      <input type="text" value={title} onChange={changeHandler} />
      <button onClick={clickHandler}>ADD</button>
      {titleError && <div className="error">Title is required</div>}
    </div>
  );
};

export default TodoForm;
