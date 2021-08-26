import React, { createContext, useEffect, useReducer } from "react";

import { gameReducer } from "./gameReducer";
import { Character } from "../interfaces/characters";
import { initialGameState } from "./gameInitialState";

export interface GameState {
  score: number;
  lifes: number;
  characters: Character[];
  activeIndexes: number[];
}

export const GameContext = createContext({} as GameState);

interface GameContextProps {
  children: React.ReactNode | null;
}

export const GameContextProvider = ({ children }: GameContextProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const initGame = () => {
    dispatch({ type: "INIT_GAME" });
    setTimeout(() => {
      dispatch({ type: "ACTIVE_ALL_CARDS" });
      setTimeout(() => dispatch({ type: "DISABLE_ALL_CARDS" }), 2500);
    }, 1000);
  };

  useEffect(() => {
    initGame();
  }, []);

  return (
    <GameContext.Provider value={{ ...state }}>{children}</GameContext.Provider>
  );
};
