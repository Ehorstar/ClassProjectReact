import React, { memo, useState } from "react";

const TodoItem = memo(({ task, removeTask, toggleDone, changeTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [error, setError] = useState(false);

  const saveTask = () => {
    if (newTitle.trim() === "") {
      setError(true);
      return;
    }
    changeTitle(task.id, newTitle);
    setIsEdit(false);
    setError(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={task.done}
        onClick={() => toggleDone(task.id)}
      />

      {isEdit ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
            onKeyDown={(e) => e.code === "Enter" && saveTask()}
            onBlur={saveTask}
          />
          {error && <div className="error">Title is required</div>}
        </>
      ) : (
        <span
          className={task.done ? "done" : ""}
          onClick={() => setIsEdit(true)}
        >
          {task.title}
        </span>
      )}

      <button className="remove-btn" onClick={() => removeTask(task.id)}>
        Remove
      </button>
    </div>
  );
});

export default TodoItem;
