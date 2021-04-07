//Grid for user search. Displays user search as cards.

import React from "react";

//components
import { NewsCard } from "./NewsCard";
import { Loading } from "./common/Loading";

export const NewsCardGrid = ({ query, savedStories, setSavedStories }) => {
  return query.loading ? (
    <React.Fragment>
      <Loading></Loading>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className="news-card-grid">
        {query.results.map((card) => {
          return (
            <NewsCard
              card={card}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
            ></NewsCard>
          );
        })}
      </div>
    </React.Fragment>
  );
};
