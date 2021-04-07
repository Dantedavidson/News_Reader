//404 page
import React from "react";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const NotFound = () => {
  return (
    <React.Fragment>
      <Nav />
      <h1>404</h1>
      <Footer />
    </React.Fragment>
  );
};
