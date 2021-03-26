import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

export const LikeBtn = ({ card, savedStories, setSavedStories }) => {
  const [like, setLike] = useState(false);
  const saveCard = () => {
    savedStories.length === 0
      ? setSavedStories([card])
      : setSavedStories([...savedStories, card]);
  };
  const deleteCard = () => {
    if (savedStories.length === 0) {
      return;
    }
    const filtered = savedStories.filter(
      (savedStory) => savedStory.story.title !== card.story.title
    );
    console.log(`filtered${filtered}`);
    filtered.length > 0 ? setSavedStories([filtered]) : setSavedStories([]);
  };

  const manageLike = () => {
    setLike(!like);
    saveCard();
    console.log(like);
  };

  return (
    <FontAwesomeIcon icon={faHeart} className="fa-lg" onClick={manageLike} />
  );
};
