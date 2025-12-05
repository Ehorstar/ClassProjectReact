import { createBrowserRouter } from "react-router";
import App from "./App";
import User from "./components/learn/User";
import Registration from "./pages/Registration";
import ToDoList from "./components/todo/ToDoList";
import Vacation from "./pages/Vacation";
import Users from "./pages/Users";
import { getUsers } from "./loaders/UsersLoaders";
import Products from "./pages/Products";
import { getProducts } from "./loaders/ProductLoaders";

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
      {
        path: "users",
        element: <Users />,
        loader: getUsers,
      },
      {
        path: "products",
        element: <Products />,
        loader: getProducts,
      },
    ],
  },
]);

export default router;
