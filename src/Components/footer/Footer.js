import React from "react";
import FooterList from "../footerList/FooterList";
import facebook from "../../images/Facebook.png";
import dribble from "../../images/Dribble.png";
import twitter from "../../images/Twitter.png";
import useDeviceSizes from "../../hooks/useDeviceSize";

import Wrapper from "../wrapper/Wrapper";
import s from "./Footer.module.css";

const Footer = () => {
  const { isMobileDevice } = useDeviceSizes();
  return (
    <div className={s.container}>
      <Wrapper>
        <span className={s.text}>DOOB</span>
        <h2 className={s.title}>CREATIVITY ABOVE</h2>
        {!isMobileDevice && <FooterList />}
        <span className={s.extraText}> © 2019 - Doob,All Right Reserved</span>
        <ul className={s.listSocial}>
          <li className={s.itemSocial}>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} />
            </a>
          </li>
          <li className={s.itemSocial}>
            <a href="https://twitter.com/?lang=ru" target="_blank">
              <img src={twitter} />
            </a>
          </li>
          <li className={s.itemSocial}>
            <a href="https://dribbble.com/" target="_blank">
              <img src={dribble} />
            </a>
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};

export default Footer;
