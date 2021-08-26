import React from "react";

import { GameContextProvider } from "./context/gameContext";
import { Header } from "./components/header";
import { Cards } from "./components/cards";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <GameContextProvider>
      <section className="wrapper">
        <GlobalStyles />
        <Header />
        <Cards />
      </section>
    </GameContextProvider>
  );
};
