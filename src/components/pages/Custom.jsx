import React from "react";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Custom = () => {
  return (
    <React.Fragment>
      <Nav current={"custom"} />
      <h3>Custom</h3>
      <Footer />
    </React.Fragment>
  );
};
