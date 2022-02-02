import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          exact="true"
        >
          Home.
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
