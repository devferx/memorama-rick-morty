import { css } from "@emotion/react";
import styled from "@emotion/styled";

import modalBg from "../../assets/images/modal-bg.png";

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
    justify-content: space-between;
    align-items: flex-start;
    padding: 32px;
    min-width: 588px;
    min-height: 419px;
    border-radius: 40px;
    background: url("${modalBg}"), #252525;
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
`;
