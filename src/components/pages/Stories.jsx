import React from "react";

import { FilterContainer } from "../FilterContainer";
import { TempGrid } from "../TempGrid";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Stories = ({ savedStories, setSavedStories }) => {
  return (
    <React.Fragment>
      <Nav current={"stories"} />
      <FilterContainer></FilterContainer>
      <TempGrid
        savedStories={savedStories}
        setSavedStories={setSavedStories}
      ></TempGrid>
      <Footer />
    </React.Fragment>
  );
};
