import { GameState } from "./gameContext";
import { Character } from "../interfaces/characters";

type GameAction =
  | { type: "INIT_GAME" }
  | { type: "ACTIVE_ALL_CARDS" }
  | {
      type: "DISABLE_ALL_CARDS";
    }
  | { type: "SELECT_CARD"; payload: number }
  | { type: "MATCH_CARDS" }
  | { type: "LOOSE" };

function shuffleCharacters(characters: Character[]): Character[] {
  const duplicateCharacters = characters.map((character) => ({
    ...character,
    id: characters.length + character.id,
  }));

  const allCharacters = [...characters, ...duplicateCharacters];

  const shuffledCharacters = allCharacters.sort((a, b) => 0.5 - Math.random());

  return shuffledCharacters;
}

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
      };
    case "LOOSE":
      return {
        ...state,
        lifes: state.lifes - 1,
        selectedCards: 0,
        activeIds: state.activeIds.slice(0, -2),
      };
    default:
      return state;
  }
}
