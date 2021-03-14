import React from "react";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Home = () => {
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <h3>Home</h3>
      <Footer />
    </React.Fragment>
  );
};
