import {
  HomeOutlined,
  RocketOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
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

      <NavLink to="vacation">
        <RocketOutlined />
      </NavLink>

      <NavLink to="products">
        <UnorderedListOutlined />
      </NavLink>
    </nav>
  );
};

export default MainMenu;
