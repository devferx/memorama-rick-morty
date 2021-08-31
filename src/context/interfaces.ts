import { Character } from "../interfaces/characters";

export interface GameState {
  score: number;
  lifes: number;
  modalMessage: {
    message: string;
    buttonText: string;
    show: boolean;
  };
  selectedCards: number;
  characters: Character[];
  activeIds: number[];
}

export interface GameContextT extends GameState {
  selectCard: (index: number) => void;
  initGame: () => void;
  resetGame: () => void;
  closeModal: () => void;
}
