import React from "react";
import { Cards } from "./components/cards";

import { Header } from "./components/header";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <section className="wrapper">
      <GlobalStyles />
      <Header />
      <Cards />
    </section>
  );
};
