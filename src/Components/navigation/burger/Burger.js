import React from "react";
import s from "./Burger.module.css";

import sprite from "../../../images/symbol-defs.svg";

const Burger = ({ toggleModal, showModal }) => {
  return (
    <>
      <button type="button" onClick={toggleModal} className={s.burger}>
        {showModal ? (
          <svg width="20" height="20">
            <use href={sprite + "#icon-cross"} />
          </svg>
        ) : (
          <svg width="20" height="20">
            <use href={sprite + "#icon-menu"} />
          </svg>
        )}
      </button>
    </>
  );
};

export default Burger;
