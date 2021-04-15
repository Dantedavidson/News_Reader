//Returns components for story page
import React, { useState } from "react";

//Components
import { InspectModal } from "../common/InspectModal";
import { SavedGrid } from "./SavedGrid";

export const Read = ({ savedStories, setSavedStories, tags }) => {
  const [modal, setModal] = useState({
    inspect: false,
    edit: false,
    current: null,
  });
  return (
    <React.Fragment>
      <div className="body stories">
        <div
          className={
            modal.inspect || modal.edit ? "modal-bg bg-active" : "modal-bg"
          }
        >
          <InspectModal modal={modal} setModal={setModal}></InspectModal>
        </div>
        <SavedGrid
          setModal={setModal}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          tags={tags}
        ></SavedGrid>
      </div>
    </React.Fragment>
  );
};
