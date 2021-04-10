//Stores shared state for create story page. Render components
import React, { useState } from "react";
import { CreateCardForm } from "../CreateCardForm";
import { InspectModal } from "../InspectModal";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Custom = ({ tags, setTags, savedStories, setSavedStories }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    author: [],
    tag: [],
  });
  const [modal, setModal] = useState({
    inspect: false,
    current: null,
  });

  return (
    <React.Fragment>
      <Nav current={"custom"} />
      <div
        className={
          modal.inspect || modal.edit ? "modal-bg bg-active" : "modal-bg"
        }
      >
        <InspectModal modal={modal} setModal={setModal}></InspectModal>
      </div>
      <div className="create body">
        <CreateCardForm
          setModal={setModal}
          setUserInput={setUserInput}
          userInput={userInput}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          tags={tags}
          setTags={setTags}
        ></CreateCardForm>
      </div>

      <Footer />
    </React.Fragment>
  );
};
