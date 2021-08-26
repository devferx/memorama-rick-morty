import React from "react";
import styled from "@emotion/styled";

import { Card } from "../card";

interface Props {}

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 87px 0;
`;

export const Cards = (props: Props) => {
  const handleClick = (name: string) => {
    console.log(name);
  };

  return (
    <StyledCards>
      <Card
        name="Rick Sanchez"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        gender="Male"
        location="Earth"
        status="Alive"
        handleClick={handleClick}
      />
    </StyledCards>
  );
};
