import { useContext } from "react";
import styled from "@emotion/styled";

import logo from "../../assets/images/logo.png";
import coins from "../../assets/icons/coins.svg";
import heart from "../../assets/icons/heart.svg";
import { GameContext } from "../../context/gameContext";

interface Props {}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`;

const HeaderContent = styled.div`
  display: flex;
  gap: 80px;
`;

const HeaderItem = styled.div`
  display: flex;
  gap: 8px;

  span {
    font: var(--headline1);
    color: var(--white);
  }
`;

export const Header = (props: Props) => {
  const { lifes, score } = useContext(GameContext);
  return (
    <StyledHeader>
      <img src={logo} alt="Rick and Morty Logo" />

      <HeaderContent>
        <HeaderItem>
          <img src={coins} alt="Coins" />
          <span>${score}</span>
        </HeaderItem>
        <HeaderItem>
          <img src={heart} alt="Heart" />
          <span>x{lifes}</span>
        </HeaderItem>
      </HeaderContent>
    </StyledHeader>
  );
};
