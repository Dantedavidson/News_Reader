import React from "react";

//Components
import { Nav } from "../Nav";
import { SearchContainer } from "../SearchContainer";

import { Footer } from "../Footer";
import { CarouselContainer } from "../CarouselContainer";

export const Home = () => {
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <CarouselContainer />
      <SearchContainer />
      <Footer />
    </React.Fragment>
  );
};
