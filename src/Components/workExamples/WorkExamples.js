import React from "react";
import s from "./WorkExamples.module.css";
import card from "../../images/Vector Illustration.png";

const WorkExamples = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>See some of our Creative work.</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={card} alt="" className={s.item_img} />
        </li>
        <li className={s.item}>
          <img src={card} alt="" className={s.item_img} />
        </li>
        <li className={s.item}>
          <img src={card} alt="" className={s.item_img} />
        </li>
        <li className={s.item}>
          <img src={card} alt="" className={s.item_img} />
        </li>
        <li className={s.item}>
          <img src={card} alt="" className={s.item_img} />
        </li>
        <li className={s.item}>
          <img src={card} alt="" className={s.item_img} />
        </li>
      </ul>
      <button type="button" className={s.btn}>
        See More of These.
      </button>
    </div>
  );
};

export default WorkExamples;
