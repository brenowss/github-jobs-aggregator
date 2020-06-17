import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.svg";
const { Header } = Layout;

function Navbar() {
  return (
    <Header>
      <Menu theme="light" mode="horizontal">
        <Menu.Item key="0">
          <img src={logo} className="logo" alt="Jobbber" />
        </Menu.Item>
        <Menu.Item key="1">
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink activeClassName="active" to="/jobs">
            Jobs
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">Profile</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
