import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//Utilities
import { saveCard, deleteCard, setLocalStorage } from "../utilities";

export const LikeBtn = ({ card, savedStories, setSavedStories }) => {
  const manageLike = () => {
    card.like = !card.like;
    card.like
      ? saveCard(card, savedStories, setSavedStories)
      : deleteCard(card, savedStories, setSavedStories);
  };
  useEffect(() => {
    setLocalStorage(savedStories, "Stories");
  }, [savedStories]);

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={card.like ? "fa-lg heart-active" : "fa-lg"}
      onClick={manageLike}
    />
  );
};
