import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const CarouselItem = ({ story }) => {
  const { title, abstract, byline, published_date, multimedia } = story;
  useEffect(() => {
    console.log(story);
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
          <FontAwesomeIcon icon={faHeart} className="fa-lg" />
        </div>
      </div>
    </div>
  );
};
