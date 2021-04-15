//Grid for user search. Displays user search as cards.

import React from "react";

//components
import { LikeBtn } from "./common/LikeBtn";
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
        {query.results.length > 0 ? (
          query.results.map((card) => {
            return (
              <NewsCard
                card={card}
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              >
                <LikeBtn
                  card={card}
                  savedStories={savedStories}
                  setSavedStories={setSavedStories}
                />
              </NewsCard>
            );
          })
        ) : (
          <h3>Sorry, No items match your query.</h3>
        )}
      </div>
    </React.Fragment>
  );
};
