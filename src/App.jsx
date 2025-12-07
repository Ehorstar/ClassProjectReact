import { Outlet } from "react-router-dom";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./Buttons/ThemeButton";
import BasketButton from "./Buttons/BasketButton";
import LangButton from "./Buttons/LangButton";

function App() {
  return (
    <>
      <header>
        <MainMenu />

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
