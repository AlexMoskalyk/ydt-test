import React from "react";
import { Link } from "react-router-dom";
import s from "./FooterList.module.css";

import { mainRoutes } from "../../routes/mainRoutes";

const FooterList = () => {
  return (
    <ul className={s.list}>
      {mainRoutes.map((route) => (
        <li className={s.item}>
          <Link to={route.path} className={s.link}>
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
