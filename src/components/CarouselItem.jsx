import React, { useEffect, useState } from "react";

import { LikeBtn } from "./common/LikeBtn";

export const CarouselItem = ({ story, savedStories, setSavedStories }) => {
  const { title, abstract, byline, published_date, multimedia } = story;
  const card = {
    story: story,
  };

  useEffect(() => {
    console.log("i rendered");
  }, []);
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
