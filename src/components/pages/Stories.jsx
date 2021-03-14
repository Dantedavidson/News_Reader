import React from "react";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Stories = () => {
  return (
    <React.Fragment>
      <Nav current={"stories"} />
      <h3>Stories</h3>
      <Footer />
    </React.Fragment>
  );
};
