import React from "react";

const TodoFilter = ({ setActiveFilter, activeFilter, filtersData }) => {
  const filters = Object.keys(filtersData);

  return (
    <div className="todo-filter">
      {filters.map((key) => (
        <button
          key={key}
          onClick={() => setActiveFilter(key)}
          style={{
            backgroundColor: activeFilter === key ? "dodgerblue" : "#ddd",
          }}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
