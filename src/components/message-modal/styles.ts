import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledModalProps {
  isDisplaying: boolean;
}

export const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 500ms;

  ${(p) =>
    p.isDisplaying
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    width: 588px;
    height: 419px;
    font: var(--subtitle1);
    border-radius: 40px;
    background: white;
    background-size: cover;
    background-position: center;
    transform: translateY(-1000px);
    transition: 450ms ease-in-out;

    ${(p) =>
      p.isDisplaying &&
      css`
        transform: translateY(0px);
      `}
  }

  @media screen and (max-width: 614px) {
    padding: 16px;

    .content {
      width: 100%;
    }
  }
`;
