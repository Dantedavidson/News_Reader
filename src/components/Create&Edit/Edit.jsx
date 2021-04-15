import React, { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

//Components

import { CreateCardForm } from "./CreateCardForm";
import { InspectModal } from "../common/InspectModal";
import { Loading } from "../common/Loading";

export const Edit = ({
  props,
  savedStories,
  setSavedStories,
  tags,
  setTags,
}) => {
  const { match } = props;
  const [modal, setModal] = useState({
    inspect: false,
    current: null,
  });
  const [preload, setPreload] = useState(null);

  // Populates form fields with current values
  useEffect(() => {
    const paramId = match.params.id;
    const current = savedStories.filter((story) => story.id === paramId)[0];
    setPreload({
      title: current.story.title,
      description: current.story.lead,
      imgUrl: current.story.imgUrl,
      url: current.story.url,
      tag: current.tags,
      author: [],
      id: current.id,
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className={
          modal.inspect || modal.edit ? "modal-bg bg-active" : "modal-bg"
        }
      >
        <InspectModal modal={modal} setModal={setModal}></InspectModal>
      </div>
      <div className="create body">
        {preload ? (
          <CreateCardForm
            title={"Edit Story"}
            setModal={setModal}
            savedStories={savedStories}
            setSavedStories={setSavedStories}
            tags={tags}
            setTags={setTags}
            props={props}
            preload={preload}
          ></CreateCardForm>
        ) : (
          <Loading></Loading>
        )}
      </div>
    </React.Fragment>
  );
};
