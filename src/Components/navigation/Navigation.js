import { React, useState } from "react";
import NavList from "./navList/NavList";
import s from "./Navigation.module.css";
import logo from "../../images/Logo.png";
import { mainRoutes } from "../../routes/mainRoutes";

import Burger from "./burger/Burger";
import Modal from "../modal/Modal";
import useDeviceSizes from "../../hooks/useDeviceSize";
import RightExtraFunc from "./rightExtraFunctional/RightExtraFunc";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const { isMobileDevice } = useDeviceSizes();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <nav className={s.wrapper}>
      <img src={logo} alt="logo" className={s.logo} />
      {!isMobileDevice && (
        <>
          <NavList routes={mainRoutes} toggleModal={toggleModal} />
          <RightExtraFunc />
        </>
      )}

      {isMobileDevice && showModal && (
        <Modal toggleModal={toggleModal}>
          <div classname={s.modalContainer}>
            <NavList routes={mainRoutes} />
            <RightExtraFunc />
          </div>
        </Modal>
      )}
      {isMobileDevice && (
        <Burger showModal={showModal} toggleModal={toggleModal} />
      )}
    </nav>
  );
};

export default Navigation;
