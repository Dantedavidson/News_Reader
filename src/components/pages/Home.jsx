import React from "react";

//Components
import { Nav } from "../Nav";
import { SearchContainer } from "../SearchContainer";
import { LatestContainer } from "../LatestContainer";
import { Footer } from "../Footer";

export const Home = () => {
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <SearchContainer />
      <LatestContainer />

      <Footer />
    </React.Fragment>
  );
};
