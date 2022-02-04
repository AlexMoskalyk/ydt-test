import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Wrapper from "./wrapper/Wrapper";

const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
