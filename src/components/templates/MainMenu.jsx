import {
  CloudOutlined,
  FileTextOutlined,
  HomeOutlined,
  KubernetesOutlined,
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

      <NavLink to="posts">
        <FileTextOutlined />
      </NavLink>

      <NavLink to="ref">
        <KubernetesOutlined />
      </NavLink>
    </nav>
  );
};

export default MainMenu;
