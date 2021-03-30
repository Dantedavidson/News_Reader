import React from "react";
import { CreateCardForm } from "../CreateCardForm";
import { DisplayCustomCard } from "../DisplayCustomCard";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Custom = () => {
  return (
    <React.Fragment>
      <Nav current={"custom"} />
      <CreateCardForm></CreateCardForm>
      <DisplayCustomCard></DisplayCustomCard>
      <Footer />
    </React.Fragment>
  );
};
