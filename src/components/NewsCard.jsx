import React from "react";
import { Link } from "react-router-dom";
import { LikeBtn } from "./common/LikeBtn";

export const NewsCard = ({ card, savedStories, setSavedStories }) => {
  const { imgUrl, title, byline, date, lead, url } = card.story;

  if (imgUrl) {
    return (
      <div className="display-card card">
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <img src={imgUrl} alt={title} />
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
      <div className="display-card card">
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>

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
