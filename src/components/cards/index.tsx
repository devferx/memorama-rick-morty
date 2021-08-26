import React, { useContext } from "react";
import styled from "@emotion/styled";

import { Card } from "../card";
import { GameContext } from "../../context/gameContext";

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 87px 0;
`;

interface Props {}

export const Cards = (props: Props) => {
  const { characters } = useContext(GameContext);
  return (
    <StyledCards>
      {characters.map((character) => (
        <Card key={character.id} {...character} characterIsVisible />
      ))}
    </StyledCards>
  );
};
