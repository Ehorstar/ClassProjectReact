import { Outlet } from "react-router-dom";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./Buttons/ThemeButton";
import BasketButton from "./Buttons/BasketButton";
import LangButton from "./Buttons/LangButton";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./slices/counterSlice";
import { useEffect } from "react";
import { getPosts } from "./slices/postsSlice";
import RegistrationButton from "./Buttons/RegistrationButton";
import Search from "./components/search/Search";

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
          <Search  />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <BasketButton />
          <LangButton />
          <ThemeButton />
          <RegistrationButton />
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
