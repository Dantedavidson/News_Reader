//Grid for user search. Displays user search as cards.

import React from "react";

//components
import { Card, Heart } from "../common/ui/ui";
import { Loading } from "../common/Loading";
import uuid from "react-uuid";

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
                key={uuid()}
                single
                card={card}
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              >
                <Heart
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
