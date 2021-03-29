import React, { useState } from "react";
import { NewsCard } from "./NewsCard";

export const TempGrid = ({ savedStories, setSavedStories }) => {
  const [search, setSearch] = useState("");
  let filtered = savedStories;
  if (search) {
    filtered = savedStories.filter((story) =>
      story.title.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    return <h1>Sorry No Stories found</h1>;
  }
  return (
    <React.Fragment>
      <div className="user-grid">
        {filtered.map((story) => {
          return (
            <NewsCard
              card={story}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
            ></NewsCard>
          );
        })}
      </div>
    </React.Fragment>
  );
};
