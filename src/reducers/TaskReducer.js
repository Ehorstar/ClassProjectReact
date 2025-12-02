const TaskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), title: action.payload, done: false }];

    case "remove":
      return state.filter((task) => task.id !== action.payload);

    case "changeDone":
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );

    case "changeTitle":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task
      );

    case "fill":
      return action.payload;

    default:
      return state;
  }
};

export default TaskReducer;
