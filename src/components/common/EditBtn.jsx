import React from "react";
//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export const EditBtn = ({ card, setModal }) => {
  const handleClick = (card) => {
    console.log(card);
    setModal((prevState) => ({
      ...prevState,
      edit: true,
    }));
  };
  return (
    <FontAwesomeIcon
      icon={faPencilAlt}
      className="fa-lg"
      onClick={() => {
        handleClick(card);
      }}
    ></FontAwesomeIcon>
  );
};
