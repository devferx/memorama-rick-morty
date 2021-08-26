import { GameState } from "./gameContext";
import { Character } from "../interfaces/characters";

type GameAction =
  | { type: "INIT_GAME" }
  | { type: "ACTIVE_ALL_CARDS" }
  | {
      type: "DISABLE_ALL_CARDS";
    };

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
        activeIndexes: state.characters.map((character) => character.id),
      };
    case "DISABLE_ALL_CARDS":
      return {
        ...state,
        activeIndexes: [],
      };
    default:
      return state;
  }
}
