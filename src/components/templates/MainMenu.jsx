import {
  CloudOutlined,
  HomeOutlined,
  RocketOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import BasketContext from "../../contexts/BasketContext";

const MainMenu = () => {
  const { basketCount } = useContext(BasketContext);

  return (
    <nav>
      <NavLink to="/">
        <HomeOutlined />
      </NavLink>

      <NavLink to="registration">
        <UserAddOutlined />
      </NavLink>

      <NavLink to="users">
        <UsergroupAddOutlined />
      </NavLink>
      
      <NavLink to="products">
        <UnorderedListOutlined />
      </NavLink>

      <NavLink to="vacation">
        <RocketOutlined />
      </NavLink>

      <NavLink to="weather">
        <CloudOutlined />
      </NavLink>
    </nav>
  );
};

export default MainMenu;
