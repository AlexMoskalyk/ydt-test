import React, { Component } from "react";
import Slider from "react-slick";
import example from "../../images/Vector Illustration.png";
import s from "./CustomSlider.module.css";

export default class CustomSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={s.container}>
        <Slider {...settings}>
          <div>
            <img src={example} alt="example" className={s.img} />
          </div>
          <div>
            <img src={example} alt="example" className={s.img} />
          </div>
          <div>
            <img src={example} alt="example" className={s.img} />
          </div>
          <div>
            <img src={example} alt="example" className={s.img} />
          </div>
        </Slider>
      </div>
    );
  }
}
