import React from "react";
import { LikeBtn } from "./common/LikeBtn";

export const NewsCard = ({
  cardDisplay,
  card,
  savedStories,
  setSavedStories,
}) => {
  const byline = card.story.byline.original;
  const title = card.story.headline.main;
  const date = card.story.pub_date;
  const imageUrl = card.story.multimedia;

  return (
    <div className={cardDisplay === "results" ? "display-card card" : "card"}>
      <h3>{title}</h3>
      <div>
        <p>{byline}</p>
        <p>{date}</p>
      </div>

      <img src={imageUrl} alt="" />
      <LikeBtn
        card={card}
        savedStories={savedStories}
        setSavedStories={setSavedStories}
      />
    </div>
  );
};
