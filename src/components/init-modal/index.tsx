import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { GameContext } from "../../context/gameContext";

import { Button } from "../button";
import { StyledModal } from "./styles";

import logo from "../../assets/images/logo.png";

const InitModal = () => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const { initGame } = useContext(GameContext);

  const handleClick = () => {
    setIsDisplaying(!isDisplaying);
    initGame();
  };

  useEffect(() => {
    setIsDisplaying(true);
  }, []);

  return ReactDOM.createPortal(
    <StyledModal isDisplaying={isDisplaying} onClick={handleClick}>
      <div className="content">
        <img src={logo} alt="Rick and Morty Logo" />

        <Button>Comenzar</Button>
      </div>
    </StyledModal>,
    document.getElementById("modal")!
  );
};

export default InitModal;
