//Stores shared state for create story page. Render components
import React, { useState } from "react";
import { CreateCardForm } from "../CreateCardForm";
import { DisplayCustomCard } from "../DisplayCustomCard";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Custom = ({ tags, setTags, savedStories, setSavedStories }) => {
  const [userInput, setUserInput] = useState({
    title: "Title",
    description: "Description",
    author: [],
    tag: [],
  });

  return (
    <React.Fragment>
      <Nav current={"custom"} />
      <div className="create body">
        <CreateCardForm
          setUserInput={setUserInput}
          userInput={userInput}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          tags={tags}
          setTags={setTags}
        ></CreateCardForm>
        <DisplayCustomCard
          userInput={userInput}
          setUserInput={setUserInput}
        ></DisplayCustomCard>
      </div>

      <Footer />
    </React.Fragment>
  );
};
