import { GameContextProvider } from "./context/gameContext";
import { Header } from "./components/header";
import { Cards } from "./components/cards";
import InitModal from "./components/init-modal";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <GameContextProvider>
      <section className="wrapper">
        <GlobalStyles />
        <Header />
        <Cards />
      </section>

      <InitModal />
    </GameContextProvider>
  );
};
