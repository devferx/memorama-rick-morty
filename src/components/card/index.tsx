import React from "react";

import { StyledCard, CardContent } from "./styles";

import genderIcon from "../../assets/icons/gender-icon.svg";
import placeIcon from "../../assets/icons/place-icon.svg";
import statusIcon from "../../assets/icons/status-icon.svg";

interface Props {
  characterIsVisible?: boolean;
  image: string;
  name: string;
  gender: string;
  status: string;
  location: string;
  handleClick?: (name: string) => void;
}

export const Card = ({
  image,
  name,
  gender,
  status,
  location,
  handleClick = () => {},
  characterIsVisible = false,
}: Props) => {
  const onClick = () => {
    handleClick(name);
  };

  return (
    <StyledCard characterIsVisible={characterIsVisible} onClick={onClick}>
      <div className="card">
        <div className="face front" />
        <div className="face back">
          <img className="avatar" src={image} alt={name} />

          <CardContent>
            <p className="name">{name}</p>

            <div>
              <img src={genderIcon} alt="Gender Icon" />
              <span>{gender}</span>
            </div>
            <div>
              <img src={statusIcon} alt="Status Icon" />
              <span>{status}</span>
            </div>
            <div>
              <img src={placeIcon} alt="Place Icon" />
              <span>{location}</span>
            </div>
          </CardContent>
        </div>
      </div>
    </StyledCard>
  );
};
