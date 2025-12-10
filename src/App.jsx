import { Outlet } from "react-router-dom";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./Buttons/ThemeButton";
import BasketButton from "./Buttons/BasketButton";
import LangButton from "./Buttons/LangButton";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./slices/counterSlice";
import { useEffect } from "react";
import { getPosts } from "./slices/postsSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const { data } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);


  return (
    <>
      <header>
        <MainMenu />
        <div>
          Posts: {data.length}
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{counter}</span>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(incrementByAmount(3))}>+3</button>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <BasketButton />
          <LangButton />
          <ThemeButton />
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
