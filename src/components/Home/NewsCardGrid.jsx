//Grid for user search. Displays user search as cards.

import React from "react";

//components
import { LikeBtn } from "../common/LikeBtn";
import { Card } from "../common/ui/ui";
import { Loading } from "../common/Loading";

export const NewsCardGrid = ({
  className,
  query,
  savedStories,
  setSavedStories,
}) => {
  return query.loading ? (
    <React.Fragment>
      <Loading></Loading>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className={className}>
        {query.results.length > 0 ? (
          query.results.map((card) => {
            return (
              <Card
                single
                card={card}
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              >
                <LikeBtn
                  card={card}
                  savedStories={savedStories}
                  setSavedStories={setSavedStories}
                />
              </Card>
            );
          })
        ) : (
          <h3>Sorry, No items match your query.</h3>
        )}
      </div>
    </React.Fragment>
  );
};
