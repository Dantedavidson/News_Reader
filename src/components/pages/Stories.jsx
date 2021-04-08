//Returns components for story page
import React, { useState } from "react";

//Components
import { InspectModal } from "../InspectModal";
import { TempGrid } from "../TempGrid";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { EditModal } from "../EditModal";

export const Stories = ({ savedStories, setSavedStories, tags }) => {
  const [modal, setModal] = useState({
    inspect: false,
    edit: false,
    current: null,
  });
  return (
    <React.Fragment>
      <Nav current={"stories"} />
      <div className="body stories">
        <div
          className={
            modal.inspect || modal.edit ? "modal-bg bg-active" : "modal-bg"
          }
        >
          <InspectModal modal={modal} setModal={setModal}></InspectModal>
          <EditModal modal={modal} setModal={setModal}></EditModal>
        </div>
        <TempGrid
          setModal={setModal}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          tags={tags}
        ></TempGrid>
      </div>
      <Footer />
    </React.Fragment>
  );
};
