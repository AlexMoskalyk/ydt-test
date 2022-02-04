import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.container}>
      <div>
        <h1 className={s.title}>The Spirit of Digital Agency.</h1>
        <h3 className={s.text}>
          Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
          Nulla porttitor accumsan tincidunt.
        </h3>
      </div>
      <div className={s.btnContainer}>
        <button type="butto" className={s.btn}>
          More About us
        </button>
        <button type="butto" className={s.btn}>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Hero;
