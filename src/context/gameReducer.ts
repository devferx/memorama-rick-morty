import { GameState } from "./gameContext";

type GameAction = { type: "SELECT_CARD" };

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    default:
      return state;
  }
}
