import React, { createContext, useReducer } from "react";

import { gameReducer } from "./gameReducer";
import { Character } from "../interfaces/characters";
import { initialGameState } from "./gameInitialState";

export interface GameState {
  score: number;
  lifes: number;
  characters: Character[];
}

export const GameContext = createContext({} as GameState);

interface GameContextProps {
  children: React.ReactNode | null;
}

export const GameContextProvider = ({ children }: GameContextProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <GameContext.Provider value={{ ...state }}>{children}</GameContext.Provider>
  );
};
