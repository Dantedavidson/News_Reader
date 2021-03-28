import React from "react";
import { NewsCard } from "./NewsCard";

export const NewsCardGrid = ({
  currentDisplay,
  searchResults,
  savedStories,
  setSavedStories,
}) => {
  return (
    <div
      className={
        currentDisplay === "results"
          ? "display-news-grid news-card-grid"
          : "news-card-grid"
      }
    >
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
  );
};
