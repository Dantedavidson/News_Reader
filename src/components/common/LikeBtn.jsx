import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

export const LikeBtn = ({ card, savedStories, setSavedStories }) => {
  const saveCard = () => {
    savedStories.length === 0
      ? setSavedStories([card])
      : setSavedStories([...savedStories, card]);
  };
  const deleteCard = () => {
    console.log("delete");
    const filtered = savedStories.filter((savedStory) => {
      return savedStory.id !== card.id;
    });
    filtered.length > 0 ? setSavedStories([...filtered]) : setSavedStories([]);
  };

  const manageLike = () => {
    card.like = !card.like;
    card.like ? saveCard() : deleteCard();
  };

  return (
    <FontAwesomeIcon icon={faHeart} className="fa-lg" onClick={manageLike} />
  );
};
