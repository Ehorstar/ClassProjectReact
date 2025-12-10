import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Registration from "./pages/Registration";
import ToDoList from "./components/todo/ToDoList";
import Vacation from "./pages/Vacation";
import Users from "./pages/Users";
import { getSearchUsers, getUser, getUsers } from "./loaders/UsersLoaders";
import Products from "./pages/Products";
import { getProduct, getProducts } from "./loaders/ProductLoaders";
import User from "./pages/User";
import Search from "./pages/Search";
import Weather from "./pages/Weather";
import { getWeather } from "./loaders/WeatherLoaders";
import ShoppingBasket from "./pages/ShoppingBasket";
import Product from "./pages/Product";
import Posts from "./pages/Posts";

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
        path: "products/:id",
        loader: getProduct,
        element: <Product />,
      },
      {
        path: "users/:login",
        loader: getUser,
        element: <User />,
      },
      {
        path: "search",
        loader: getSearchUsers,
        element: <Search />,
      },
      {
        path: "weather",
        loader: getWeather,
        element: <Weather />,
      },
      {
        path: "basket",
        element: <ShoppingBasket />,
      },
      {
        path: "posts",
        element: <Posts/>
      }
    ],
  },
]);

export default router;
