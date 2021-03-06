import React, { useEffect } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.ModalBackdrop}>
      <div className={s.ModalContent}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
