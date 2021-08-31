import { createContext, useEffect, useReducer } from "react";
import type { ReactNode } from "react";

import { gameReducer } from "./gameReducer";
import { Character } from "../interfaces/characters";
import { initialGameState } from "./gameInitialState";
import { GameContextT } from "./interfaces";

export const GameContext = createContext({} as GameContextT);

interface GameContextProps {
  children: ReactNode | null;
}

export const GameContextProvider = ({ children }: GameContextProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const {
    activeIds: activeIndexes,
    characters,
    selectedCards,
    score,
    lifes,
  } = state;

  const initGame = () => {
    dispatch({ type: "INIT_GAME" });
    setTimeout(() => {
      dispatch({ type: "ACTIVE_ALL_CARDS" });
      setTimeout(() => dispatch({ type: "DISABLE_ALL_CARDS" }), 2500);
    }, 0);
  };

  const selectCard = (index: number) =>
    dispatch({ type: "SELECT_CARD", payload: index });

  const checkSelectedCardsMatch = () => {
    if (activeIndexes.length < 2 || activeIndexes.length == characters.length)
      return;

    const lastId = activeIndexes[activeIndexes.length - 1];
    const penultimateId = activeIndexes[activeIndexes.length - 2];

    const character1 = characters.find((c: Character) => c.id === lastId);
    const character2 = characters.find(
      (c: Character) => c.id === penultimateId
    );

    if (character1?.name === character2?.name && selectedCards === 2)
      dispatch({ type: "MATCH_CARDS" });

    if (character1?.name !== character2?.name && selectedCards === 2) {
      setTimeout(() => {
        dispatch({ type: "LOOSE" });
      }, 500);
    }
  };

  const checkGameWin = () => {
    if (activeIndexes.length === characters.length && score > 100) {
      dispatch({ type: "WIN" });
    }
  };

  const checkGameOver = () => {
    if (lifes === 0) {
      dispatch({ type: "GAME_OVER" });
    }
  };

  const closeModal = () => dispatch({ type: "CLOSE_MODAL_MESSAGE" });

  const resetGame = () => {
    dispatch({ type: "RESET" });
    initGame();
  };

  useEffect(() => {
    checkGameOver();
    checkSelectedCardsMatch();
    checkGameWin();
  }, [state.activeIds]);

  return (
    <GameContext.Provider
      value={{ ...state, initGame, selectCard, closeModal, resetGame }}
    >
      {children}
    </GameContext.Provider>
  );
};
