import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Wrapper from "./wrapper/Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

export default App;
