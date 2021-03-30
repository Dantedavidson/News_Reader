import React, { useState } from "react";
import { CreateCardForm } from "../CreateCardForm";
import { DisplayCustomCard } from "../DisplayCustomCard";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Custom = () => {
  const [userInput, setUserInput] = useState({
    title: "title",
    description: "description",
    author: "author",
    tag: "tag",
  });

  return (
    <React.Fragment>
      <Nav current={"custom"} />
      <div className="custom-body">
        <CreateCardForm setUserInput={setUserInput}></CreateCardForm>
        <DisplayCustomCard userInput={userInput}></DisplayCustomCard>
      </div>

      <Footer />
    </React.Fragment>
  );
};
