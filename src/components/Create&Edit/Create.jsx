//Stores shared state for create story page. Render components
import React, { useState } from "react";
import { CreateCardForm } from "./CreateCardForm";
import { ModalBG, Inspect } from "../common/ui/modal";

export const Create = ({
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
      <ModalBG current={modal.inspect}>
        <Inspect modal={modal} setModal={setModal}></Inspect>
      </ModalBG>
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
    </React.Fragment>
  );
};
