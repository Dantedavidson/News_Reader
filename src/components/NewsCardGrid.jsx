import React from "react";
import { NewsCard } from "./NewsCard";
import { Button } from "./common/Button";

export const NewsCardGrid = ({
  currentDisplay,
  setCurrentDisplay,
  searchResults,
  savedStories,
  setSavedStories,
}) => {
  return (
    <React.Fragment>
      <div className="news-card-grid">
        {searchResults.map((card) => {
          return (
            <NewsCard
              card={card}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
            ></NewsCard>
          );
        })}
      </div>
      <div className="button-container">
        <Button
          handler={() => {
            setCurrentDisplay("modal");
          }}
          text="New Search"
        ></Button>
        <Button
          handler={() => {
            console.log("Load More");
          }}
          text="Load More"
        ></Button>
      </div>
    </React.Fragment>
  );
};
