import React from "react";
import CustomSlider from "../Components/customSlider/CustomSlider";
import Hero from "../Components/hero/Hero";
import WorkExamples from "../Components/workExamples/WorkExamples";
import useDeviceSizes from "../hooks/useDeviceSize";
import s from "./HomePage.module.css";

const HomePage = () => {
  const { isMobileDevice } = useDeviceSizes();
  return (
    <>
      <div className={s.heroContainer}>
        <Hero />
        {!isMobileDevice && <CustomSlider />}
      </div>
      <WorkExamples />
    </>
  );
};

export default HomePage;
