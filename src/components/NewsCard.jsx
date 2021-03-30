import React, { useEffect } from "react";
import { LikeBtn } from "./common/LikeBtn";

export const NewsCard = ({
  cardDisplay,
  card,
  savedStories,
  setSavedStories,
}) => {
  const { imgUrl, title, byline, date, lead } = card.story;
  useEffect(() => {
    console.log(card);
    console.log("i rendered");
  });

  if (imgUrl) {
    return (
      <div className={cardDisplay === "results" ? "display-card card" : "card"}>
        <h3>{title}</h3>
        <img src={imgUrl} alt="" />
        <div>
          <div>
            <h6>{byline}</h6>
            <h6>{date}</h6>
          </div>
          <LikeBtn
            card={card}
            savedStories={savedStories}
            setSavedStories={setSavedStories}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={cardDisplay === "results" ? "display-card card" : "card"}>
        <h3>{title}</h3>

        <p>{lead}</p>
        <div>
          <div>
            <h6>{byline}</h6>
            <h6>{date}</h6>
          </div>
          <LikeBtn
            card={card}
            savedStories={savedStories}
            setSavedStories={setSavedStories}
          />
        </div>
      </div>
    );
  }
};
