import React from "react";

import { LikeBtn } from "./common/LikeBtn";

export const CarouselItem = ({ card, savedStories, setSavedStories }) => {
  const { title, lead, byline, date, imgUrl } = card.story;
  return (
    <div className="carousel-item-container">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <div>
          <h2>{title}</h2>
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
