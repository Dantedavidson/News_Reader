import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log(userInput.tag);
    console.log(`use effect type value: ${typeof userInput.tag}`);
  }, [userInput]);
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
