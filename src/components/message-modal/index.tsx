import { useContext } from "react";
import ReactDOM from "react-dom";

import { GameContext } from "../../context/gameContext";

import { Button } from "../button";
import { StyledModal } from "./styles";

import logo from "../../assets/images/logo.png";

export const MessageModal = () => {
  const { modalMessage, closeModal, resetGame } = useContext(GameContext);
  const { show, message, buttonText } = modalMessage;

  const handleClick = () => {
    if (buttonText === "Volver a jugar") {
      resetGame();
    }

    closeModal();
  };

  return ReactDOM.createPortal(
    <StyledModal isDisplaying={show} onClick={handleClick}>
      <div className="content">
        <img src={logo} alt="Rick and Morty Logo" />

        <p>{message}</p>
        <Button>{buttonText}</Button>
      </div>
    </StyledModal>,
    document.getElementById("modal")!
  );
};
