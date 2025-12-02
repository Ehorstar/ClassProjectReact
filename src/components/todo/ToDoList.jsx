import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  useCallback,
} from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";
import TaskReducer from "../../reducers/TaskReducer";
import I18nContext from "../../contexts/I18nContext";

const ToDoList = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, list);
  const [activeFilter, setActiveFilter] = useState("All tasks");
  const { currentTexts, currentLang, changeLang } = useContext(I18nContext);

  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("tasks");
    if (tasksFromStorage) {
      dispatch({
        type: "fill",
        payload: JSON.parse(tasksFromStorage),
      });
    }
    const filterFromStorage = localStorage.getItem("filter");
    if (filterFromStorage) {
      setActiveFilter(filterFromStorage);
    }

    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      changeLang(savedLang);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    localStorage.setItem("lang", currentLang);
  }, [currentLang]);
  
  const addTask = useCallback((title) => {
    dispatch({
      type: "add",
      payload: title,
    });
  }, []);

  const removeTask = useCallback((id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  }, []);

  const toggleDone = useCallback((id) => {
    dispatch({
      type: "changeDone",
      payload: id,
    });
  }, []);

  const changeTitle = useCallback((id, newTitle) => {
    dispatch({
      type: "changeTitle",
      payload: { id, title: newTitle },
    });
  }, []);

  const filtersData = {
    "All tasks": () => true,
    "Done tasks": (task) => task.done,
    "Short task": (task) => task.title.length < 4,
    "Todo tasks": (task) => !task.done,
  };

  return (
    <div className="todo">
      <h1>{currentTexts.todolist}</h1>
      <TodoForm addTask={addTask} />
      <div className="todo-panel">
        <TodoFilter
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          filtersData={filtersData}
        />
        <div className="todo-list">
          {tasks.filter(filtersData[activeFilter]).map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleDone={toggleDone}
              changeTitle={changeTitle}
            />
          ))}
        </div>
        <div>
          {tasks.filter((task) => task.done).length} from {tasks.length}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

// const[day, month, year] = [13, 11, 2025];
// console.log(month);

// const admin = {
//     name: 'Vasia',
//     age: 23,
//     car: true
// }

// const { age, name } = user;
// console.log(age, name);

// const showUserInfo = ({ name,age,car })=>{
//     console.log(name, age, car);
// }

// showUserInfo(admin);
