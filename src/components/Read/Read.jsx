//Returns components for story page
import React, { useState } from "react";

//Components

import { SavedGrid } from "./SavedGrid";

//Ui Components
import { Inspect, ModalBG, Modal } from "../common/ui/modal";
import { Body } from "../common/ui/ui";

export const Read = ({ savedStories, setSavedStories, tags }) => {
  const [modal, setModal] = useState({
    inspect: false,
    edit: false,
    current: null,
  });
  return (
    <React.Fragment>
      <Body>
        <ModalBG current={modal.inspect ? true : false}>
          <Inspect modal={modal} setModal={setModal}></Inspect>
        </ModalBG>
        <SavedGrid
          setModal={setModal}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          tags={tags}
        ></SavedGrid>
      </Body>
    </React.Fragment>
  );
};
