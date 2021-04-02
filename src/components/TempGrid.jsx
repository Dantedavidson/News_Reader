import React, { useState } from "react";
import { NewsCard } from "./NewsCard";
import { Search } from "./Search";
export const TempGrid = ({ savedStories, setSavedStories, tags }) => {
  const [search, setSearch] = useState({
    term: "",
    tags: "all",
  });
  let filtered = savedStories;
  if (search.term) {
    filtered = savedStories.filter((card) =>
      card.story.title.toLowerCase().startsWith(search.term.toLowerCase())
    );
  }

  return (
    <React.Fragment>
      <Search search={search} setSearch={setSearch} tags={tags}></Search>
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
