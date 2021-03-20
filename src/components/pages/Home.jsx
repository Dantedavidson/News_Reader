import React from "react";

//Components
import { Nav } from "../Nav";
import Slider from "../Slider";
import { Footer } from "../Footer";

export const Home = () => {
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <h3>Home</h3>
      <Slider />
      <Footer />
    </React.Fragment>
  );
};
