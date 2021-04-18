//Individual card item
import React from "react";

import { Line } from "./ui/ui";

export const NewsCard = ({ children, card, className }) => {
  const { imgUrl, title, byline, date, lead, url } = card.story;

  if (imgUrl) {
    return (
      <div className={className} id={card.id}>
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <img src={imgUrl} alt={title} />
        <div>
          <h6>{byline}</h6>
          <h6>{date}</h6>
        </div>
        <Line yPx={1} xPercent={95} xm={0.3} ym={0.3}></Line>
        <div>{children}</div>
      </div>
    );
  } else {
    return (
      <div className={className} id={card.id}>
        <a href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <p>{lead}</p>
        <div>
          <h6>{byline}</h6>
          <h6>{date}</h6>
          <Line yPx={1} xPercent={90} xm={0.3} ym={0.3}></Line>
        </div>
        <div>{children}</div>
      </div>
    );
  }
};
