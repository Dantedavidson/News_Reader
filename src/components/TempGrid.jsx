import React from "react";
import { NewsCard } from "./NewsCard";

export const TempGrid = ({ savedStories, setSavedStories }) => {
  if (savedStories.length === 0) {
    return <h1>Sorry No Stories found</h1>;
  }
  return (
    <div className="user-grid">
      {savedStories.map((story) => {
        return (
          <NewsCard
            card={story}
            savedStories={savedStories}
            setSavedStories={setSavedStories}
          ></NewsCard>
        );
      })}
    </div>
  );
};
