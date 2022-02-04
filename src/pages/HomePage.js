import React from "react";
import CustomSlider from "../Components/customSlider/CustomSlider";
import Form from "../Components/form/Form";
import Hero from "../Components/hero/Hero";
import WorkExamples from "../Components/workExamples/WorkExamples";
import useDeviceSizes from "../hooks/useDeviceSize";
import s from "./HomePage.module.css";

const HomePage = ({ routes }) => {
  const { isMobileDevice } = useDeviceSizes();
  return (
    <>
      <div className={s.heroContainer}>
        <Hero />
        {!isMobileDevice && <CustomSlider />}
      </div>
      <WorkExamples routes={routes} />
      <Form />
    </>
  );
};

export default HomePage;
