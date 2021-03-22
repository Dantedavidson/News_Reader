import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const NewsCard = ({ title, url }) => {
  return (
    <div class="card">
      <a href={url} target="_blank">
        <p>{title}</p>
      </a>
      <FontAwesomeIcon icon={faHeart} className="fa-lg" />
    </div>
  );
};
