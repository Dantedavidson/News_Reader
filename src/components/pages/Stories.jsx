//Returns components for story page
import React from "react";

//Components
import { TempGrid } from "../TempGrid";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Stories = ({ savedStories, setSavedStories, tags }) => {
  return (
    <React.Fragment>
      <Nav current={"stories"} />
      <div className="body stories">
        <TempGrid
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          tags={tags}
        ></TempGrid>
      </div>
      <Footer />
    </React.Fragment>
  );
};
