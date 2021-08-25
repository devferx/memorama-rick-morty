import React from "react";

import { Header } from "./components/header";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <section className="wrapper">
      <GlobalStyles />
      <Header />
    </section>
  );
};
