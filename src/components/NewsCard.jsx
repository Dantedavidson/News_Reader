import React, { useEffect } from "react";
import { LikeBtn } from "./common/LikeBtn";

//Utilities
import { cleanCard } from "./utilities";

export const NewsCard = ({
  cardDisplay,
  card,
  savedStories,
  setSavedStories,
}) => {
  const display = cleanCard(card);
  const { imgUrl, title, byline, date, paragraph } = display;
  useEffect(() => {
    console.log("i rendered");
  });

  if (imgUrl) {
    return (
      <div className={cardDisplay === "results" ? "display-card card" : "card"}>
        <h3>{title}</h3>
        <img src={imgUrl} alt="" />
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
    );
  } else {
    return (
      <div className={cardDisplay === "results" ? "display-card card" : "card"}>
        <h3>{title}</h3>

        <p>{paragraph}</p>

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
    );
  }
};
