import React from "react";
import Navigation from "../navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <Navigation />
    </header>
  );
};

export default Header;
