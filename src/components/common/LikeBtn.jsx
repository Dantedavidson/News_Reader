import React, { useState } from "react";
import uuid from "react-uuid";

//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//Utilities
import { saveCard, deleteCard } from "../utilities";

export const LikeBtn = ({ card, savedStories, setSavedStories }) => {
  const manageLike = () => {
    console.log("went off");
    card.like = !card.like;
    card.like
      ? saveCard(card, savedStories, setSavedStories)
      : deleteCard(card, savedStories, setSavedStories);
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={card.like ? "fa-lg heart-active" : "fa-lg"}
      onClick={manageLike}
    />
  );
};
