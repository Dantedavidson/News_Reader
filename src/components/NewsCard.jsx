//Individual card item
import React from "react";
import { LikeBtn } from "./common/LikeBtn";
import { InspectBtn } from "./common/InspectBtn";
import { EditBtn } from "./common/EditBtn";
import { HorizontalLine } from "./common/HorizontalLine";

export const NewsCard = ({ card, savedStories, setSavedStories }) => {
  const { imgUrl, title, byline, date, lead, url } = card.story;

  if (imgUrl) {
    return (
      <div className="card">
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <img src={imgUrl} alt={title} />
        <div>
          <h6>{byline}</h6>
          <h6>{date}</h6>
          <HorizontalLine></HorizontalLine>
        </div>
        <div>
          <InspectBtn></InspectBtn>
          <EditBtn></EditBtn>
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
      <div className="card">
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <p>{lead}</p>
        <div>
          <h6>{byline}</h6>
          <h6>{date}</h6>
          <HorizontalLine></HorizontalLine>
        </div>
        <div>
          <InspectBtn></InspectBtn>
          <EditBtn></EditBtn>
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
