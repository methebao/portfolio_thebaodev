import React from "react";
import Slider from "react-slick";
import sliderStyles from "./Slider.module.scss";

const SliderWrapper = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={sliderStyles.sliderWrapper}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderWrapper;
