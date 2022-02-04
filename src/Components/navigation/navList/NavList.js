import React from "react";
import { NavLink } from "react-router-dom";
import RightExtraFunc from "../rightExtraFunctional/RightExtraFunc";
import s from "./NavList.module.css";

const NavList = ({ routes, toggleModal }) => {
  const closeModal = () => {
    toggleModal();
  };
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {routes.map((route) => (
          <li key={route.path} className={s.item}>
            <NavLink
              onClick={closeModal}
              to={route.path}
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
