import React from "react";
import { Link } from "react-router-dom";
//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export const EditBtn = ({ card }) => {
  return (
    <Link to={`/edit/${card.id}`}>
      <FontAwesomeIcon icon={faPencilAlt} className="fa-lg"></FontAwesomeIcon>
    </Link>
  );
};
