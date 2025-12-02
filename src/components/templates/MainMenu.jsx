import {
  HomeOutlined,
  RocketOutlined,
  UserAddOutlined,
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

      <NavLink to="vacation">
        <RocketOutlined />
      </NavLink>
    </nav>
  );
};

export default MainMenu;
