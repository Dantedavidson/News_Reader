//Individual card item
import React from "react";
import { LikeBtn } from "./common/LikeBtn";
import { InspectBtn } from "./common/InspectBtn";
import { EditBtn } from "./common/EditBtn";
import { HorizontalLine } from "./common/HorizontalLine";

export const NewsCard = ({
  children,
  card,
  savedStories,
  setSavedStories,
  setModal,
}) => {
  const { imgUrl, title, byline, date, lead, url } = card.story;

  if (imgUrl) {
    return (
      <div className="card" id={card.id}>
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <img src={imgUrl} alt={title} />
        <div>
          <h6>{byline}</h6>
          <h6>{date}</h6>
          <HorizontalLine></HorizontalLine>
        </div>
        <div>{children}</div>
      </div>
    );
  } else {
    return (
      <div className="card" id={card.id}>
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <p>{lead}</p>
        <div>
          <h6>{byline}</h6>
          <h6>{date}</h6>
          <HorizontalLine></HorizontalLine>
        </div>
        <div>{children}</div>
      </div>
    );
  }
};
