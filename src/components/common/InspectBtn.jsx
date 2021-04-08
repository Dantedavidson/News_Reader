import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

export const InspectBtn = ({ card, setModal }) => {
  const handleClick = (card) => {
    console.log(card);
    setModal((prevState) => ({
      ...prevState,
      inspect: true,
      current: card,
    }));
  };
  return (
    <FontAwesomeIcon
      icon={faSearchPlus}
      className="fa-lg"
      onClick={() => {
        handleClick(card);
      }}
    ></FontAwesomeIcon>
  );
};
