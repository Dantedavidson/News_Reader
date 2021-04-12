import React, { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

//Components
import { Nav } from "../Nav";
import { CreateCardForm } from "../CreateCardForm";
import { InspectModal } from "../InspectModal";
import { Footer } from "../Footer";

export const Edit = ({
  props,
  savedStories,
  setSavedStories,
  tags,
  setTags,
}) => {
  const [modal, setModal] = useState({
    inspect: false,
    current: null,
  });

  return (
    <React.Fragment>
      <Nav></Nav>
      <div
        className={
          modal.inspect || modal.edit ? "modal-bg bg-active" : "modal-bg"
        }
      >
        <InspectModal modal={modal} setModal={setModal}></InspectModal>
      </div>
      <div className="create body">
        <CreateCardForm
          title={"Edit Story"}
          setModal={setModal}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          tags={tags}
          setTags={setTags}
          props={props}
        ></CreateCardForm>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
