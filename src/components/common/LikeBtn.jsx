import React, { useEffect } from "react";

//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { saveCard, deleteCard, setLocalStorage } from "../Utility/utilities";

export const LikeBtn = ({ className, card, savedStories, setSavedStories }) => {
  //Toggle like status of item. Updates saved stories.
  const manageLike = () => {
    card.like = !card.like;
    card.like
      ? saveCard(card, savedStories, setSavedStories)
      : deleteCard(card, savedStories, setSavedStories);
  };
  // update local storage
  useEffect(() => {
    setLocalStorage(savedStories, "Stories");
  }, [savedStories]);

  return (
    <FontAwesomeIcon
      className={card.like ? `${className} like` : className}
      active={card.like}
      icon={faHeart}
      onClick={manageLike}
    />
  );
};
