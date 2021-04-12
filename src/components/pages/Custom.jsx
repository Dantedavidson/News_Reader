//Stores shared state for create story page. Render components
import React, { useState } from "react";
import { CreateCardForm } from "../CreateCardForm";
import { InspectModal } from "../InspectModal";

//Components
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Custom = ({
  props,
  tags,
  setTags,
  savedStories,
  setSavedStories,
}) => {
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
          props={props}
          title={"Create Custom Story"}
          setModal={setModal}
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
