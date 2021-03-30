import React, { useState } from "react";
import { NewsCard } from "./NewsCard";
import { Search } from "./Search";
export const TempGrid = ({ savedStories, setSavedStories }) => {
  const [search, setSearch] = useState("");
  let filtered = savedStories;
  if (search) {
    filtered = savedStories.filter((card) =>
      card.story.title.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  return (
    <React.Fragment>
      <Search search={search} setSearch={setSearch}></Search>
      <div>{filtered.length === 0 ? <h3>No stories found</h3> : ""}</div>
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
