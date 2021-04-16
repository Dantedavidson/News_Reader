//Grid for saved user stories.

import React, { useState } from "react";

//Components
import { LikeBtn } from "../common/LikeBtn";
import { InspectBtn } from "../common/InspectBtn";
import { EditBtn } from "../common/EditBtn";
import { Card } from "../UI/Card.style";
import { Search } from "./Search";

export const SavedGrid = ({
  savedStories,
  setSavedStories,
  tags,
  setModal,
}) => {
  const [search, setSearch] = useState({
    term: "",
    tags: "All",
  });

  let filtered = savedStories;
  //Logic for filter
  if (search.term && search.tags !== "All") {
    let temp = savedStories.filter((card) =>
      card.story.title.toLowerCase().includes(search.term.toLowerCase())
    );
    filtered = temp.filter((card) => card.tags.includes(search.tags));
  } else if (search.term) {
    filtered = savedStories.filter((card) =>
      card.story.title.toLowerCase().includes(search.term.toLowerCase())
    );
  } else if (search.tags !== "All") {
    filtered = savedStories.filter((card) => card.tags.includes(search.tags));
  }

  return (
    <div className="search-body">
      <Search search={search} setSearch={setSearch} tags={tags}></Search>
      {filtered.length === 0 ? <h3>No stories found</h3> : ""}
      <div className="user-grid">
        {filtered.map((story) => {
          return (
            <Card
              setModal={setModal}
              card={story}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
            >
              <InspectBtn card={story} setModal={setModal}></InspectBtn>
              <EditBtn card={story} setModal={setModal}></EditBtn>
              <LikeBtn
                card={story}
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
