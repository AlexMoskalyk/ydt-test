import sprite from "../../../images/symbol-defs.svg";
import s from "./RightExtraFunc.module.css";

const RightExtraFunc = () => {
  return (
    <div className={s.rightContainer}>
      <form className={s.form}>
        <select className={s.select}>
          <option>RU</option>
          <option>EN</option>
        </select>
      </form>
      <button type="button" className={s.navBtn}>
        <span className={s.btnText}>Contact us</span>
        <svg className={s.arrow}>
          <use href={sprite + "#icon-arrow-right2"} />
        </svg>
      </button>
    </div>
  );
};

export default RightExtraFunc;
