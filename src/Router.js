import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Registration from "./pages/Registration";
import ToDoList from "./components/todo/ToDoList";
import Vacation from "./pages/Vacation";
import Users from "./pages/Users";
import { getUser, getUsers } from "./loaders/UsersLoaders";
import Products from "./pages/Products";
import { getProducts } from "./loaders/ProductLoaders";
import User from "./pages/User";

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
      {
        path: "users/:login",
        loader: getUser,
        element: <User />
      },
    ],
  },
]);

export default router;
