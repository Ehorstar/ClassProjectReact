import {
  HomeOutlined,
  RocketOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router";

const MainMenu = () => {
  return (
    <nav>
      <NavLink to="/">
        <HomeOutlined />
      </NavLink>

      <NavLink to="user">
        <UserOutlined />
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
