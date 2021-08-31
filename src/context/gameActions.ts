export type GameAction =
  | { type: "INIT_GAME" }
  | { type: "ACTIVE_ALL_CARDS" }
  | {
      type: "DISABLE_ALL_CARDS";
    }
  | { type: "SELECT_CARD"; payload: number }
  | { type: "MATCH_CARDS" }
  | { type: "LOOSE" }
  | { type: "CLOSE_MODAL_MESSAGE" }
  | { type: "WIN" }
  | { type: "GAME_OVER" };
