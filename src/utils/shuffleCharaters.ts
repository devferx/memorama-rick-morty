import { Character } from "../interfaces/characters";

export function shuffleCharacters(characters: Character[]): Character[] {
  const duplicateCharacters = characters.map((character) => ({
    ...character,
    id: characters.length + character.id,
  }));

  const allCharacters = [...characters, ...duplicateCharacters];

  const shuffledCharacters = allCharacters.sort((a, b) => 0.5 - Math.random());

  return shuffledCharacters;
}
