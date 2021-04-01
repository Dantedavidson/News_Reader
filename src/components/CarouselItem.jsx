import React, { useEffect, useState } from "react";

import { LikeBtn } from "./common/LikeBtn";

export const CarouselItem = ({ card, savedStories, setSavedStories }) => {
  const { title, lead, byline, date, imgUrl } = card.story;
  useEffect(() => {}, []);
  return (
    <div className="carousel-item-container">
      <div>
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
            <p>Published {date}</p>
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
