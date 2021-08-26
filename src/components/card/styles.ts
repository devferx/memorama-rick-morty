import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledCardProps {
  characterIsVisible?: boolean;
}

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 450ms;

  ${(p) =>
    p.characterIsVisible &&
    css`
      transform: rotateY(180deg);
    `}

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .face.front {
    height: 100%;
    border-radius: 8px;
    background: url("/src/assets/images/card-bg.png"), #303030;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 99;
  }

  .face.back {
    position: relative;
    transform: rotateY(180deg);
    overflow: hidden;
    border-radius: 8px;
    background: white;
  }

  .avatar {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "name name" "gender status" "place place";
  gap: 24px;
  padding: 16px;

  .name {
    grid-area: name;
    font: var(--headline2);
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font: var(--body1-regular);
    }
  }
  .location {
    grid-area: place;
  }
`;
