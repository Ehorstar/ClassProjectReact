import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router";
import ToDoList from "./components/todo/ToDoList";
import User from "./components/learn/User";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/I18nProvider";
import Registration from "./pages/Registration";
import Vacation from "./pages/Vacation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <h1 className="home">Its Home</h1>,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "todolist",
        element: <ToDoList />,
      },
      {
        path: "vacation",
        element: <Vacation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </I18nProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
