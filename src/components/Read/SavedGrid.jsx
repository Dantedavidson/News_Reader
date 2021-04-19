//Grid for saved user stories.

import React, { useState } from "react";

//Components
import { LikeBtn } from "../common/LikeBtn";
import { Heart } from "../common/ui/ui";
import { InspectBtn } from "../common/InspectBtn";
import { EditBtn } from "../common/EditBtn";
import { Card } from "../common/ui/ui";
import { Search } from "./Search";

import { Grid, NotFound } from "./ui";

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
      {filtered.length === 0 ? (
        <NotFound>
          <h3>No stories found</h3>
        </NotFound>
      ) : (
        ""
      )}
      <Grid>
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
              <Heart
                card={story}
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              />
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};
