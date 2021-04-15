import React, { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

//Components
import { Nav } from "../Nav";
import { CreateCardForm } from "../CreateCardForm";
import { InspectModal } from "../InspectModal";
import { Loading } from "../common/Loading";
import { Footer } from "../Footer";

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
      <Nav></Nav>
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
      <Footer></Footer>
    </React.Fragment>
  );
};
