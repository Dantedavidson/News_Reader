import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const NewsCard = ({
  title,
  byline,
  date,
  url,
  imageUrl,
  cardDisplay,
}) => {
  return (
    <div className={cardDisplay === "results" ? "display-card card" : "card"}>
      <h3>{title}</h3>
      <div>
        <p>{byline}</p>
        <p>{date}</p>
      </div>

      <img src={imageUrl} alt="" />
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};
