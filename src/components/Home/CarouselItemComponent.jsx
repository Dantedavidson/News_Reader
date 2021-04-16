//Individual Carousel item
import React from "react";

import { LikeBtn } from "../common/LikeBtn";

export const CarouselItemComponent = ({
  card,
  savedStories,
  setSavedStories,
  className,
}) => {
  const { title, lead, byline, date, imgUrl, url } = card.story;
  return (
    <div className={className}>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <div>
          <a href={url} target="_blank">
            <h2>{title}</h2>
          </a>
          <h3>{lead}</h3>
        </div>
        <div>
          <div>
            <p>From {byline}</p>
            <p>{date}</p>
          </div>
          <LikeBtn
            card={card}
            savedStories={savedStories}
            setSavedStories={setSavedStories}
          ></LikeBtn>
        </div>
      </div>
    </div>
  );
};
