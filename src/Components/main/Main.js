import React from "react";

import { Routes, Route } from "react-router-dom";
import AboutUsPage from "../../pages/AboutUsPage";
import HomePage from "../../pages/HomePage";
import PortfolioPage from "../../pages/PortfolioPage";
import BlogPage from "../../pages/BlogPage";
import ContactUs from "../../pages/ContactUs";
import s from "./Main.module.css";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <main className={s.container}>
      <Routes>
        <Route path="/" element={<HomePage routes={mainRoutes} />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/aboutUs" element={<AboutUsPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
