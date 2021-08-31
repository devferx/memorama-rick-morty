import type { GameAction } from "./gameActions";
import type { GameState } from "./interfaces";

import { initialGameState } from "./gameInitialState";
import { shuffleCharacters } from "../utils/shuffleCharaters";

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "INIT_GAME":
      return {
        ...state,
        characters: shuffleCharacters(state.characters),
      };
    case "ACTIVE_ALL_CARDS":
      return {
        ...state,
        activeIds: state.characters.map((character) => character.id),
      };
    case "DISABLE_ALL_CARDS":
      return {
        ...state,
        activeIds: [],
      };
    case "SELECT_CARD":
      return {
        ...state,
        activeIds: [...state.activeIds, action.payload],
        selectedCards: state.selectedCards + 1,
      };
    case "MATCH_CARDS":
      return {
        ...state,
        selectedCards: 0,
        score: state.score + 100,
        modalMessage: {
          message: "¡Felicidades!, has encontrado un par.",
          buttonText: "Continuar",
          show: true,
        },
      };
    case "LOOSE":
      return {
        ...state,
        lifes: state.lifes - 1,
        selectedCards: 0,
        activeIds: state.activeIds.slice(0, -2),
        modalMessage: {
          message: "¡Cuidado!, ese no es el par correcto.",
          buttonText: "Continuar",
          show: true,
        },
      };
    case "CLOSE_MODAL_MESSAGE":
      return {
        ...state,
        modalMessage: {
          ...state.modalMessage,
          show: false,
        },
      };
    case "WIN":
      return {
        ...state,
        modalMessage: {
          message: "¡Felicidades!, has completado el juego.",
          buttonText: "Volver a jugar",
          show: true,
        },
      };
    case "GAME_OVER":
      return {
        ...state,
        modalMessage: {
          message: "Te has quedado sin vidas.",
          buttonText: "Volver a jugar",
          show: true,
        },
      };
    case "RESET":
      return {
        ...initialGameState,
      };
    default:
      return state;
  }
}
