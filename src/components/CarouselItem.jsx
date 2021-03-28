import React, { useEffect, useState } from "react";

import { LikeBtn } from "./common/LikeBtn";

export const CarouselItem = ({ card, savedStories, setSavedStories }) => {
  const { title, abstract, byline, published_date, multimedia } = card.story;
  useEffect(() => {}, []);
  return (
    <div className="carousel-item-container">
      <div>
        <img src={multimedia[0].url} alt="" />
      </div>
      <div>
        <div>
          <h2>{title}</h2>
          <h3>{abstract}</h3>
        </div>
        <div>
          <div>
            <p>From {byline}</p>
            <p>Published {published_date}</p>
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
