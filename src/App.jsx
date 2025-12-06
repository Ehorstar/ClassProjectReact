import { Outlet } from "react-router-dom";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import { useContext } from "react";
import I18nContext from "./contexts/I18nContext";

function App() {
  const { currentLang, changeLang } = useContext(I18nContext);

  return (
    <>
      <header>
        <MainMenu />
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => changeLang("ua")}>UA</button>
          <button onClick={() => changeLang("en")}>EN</button>
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
