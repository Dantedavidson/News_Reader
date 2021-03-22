import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const CarouselItem = ({ title, abstract, author, date }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h3>{abstract}</h3>
      </div>
      <div>
        <div>
          <p>From {author}</p>
          <p>Published {date}</p>
        </div>
        <FontAwesomeIcon icon={faHeart} className="fa-lg" />
      </div>
    </div>
  );
};
