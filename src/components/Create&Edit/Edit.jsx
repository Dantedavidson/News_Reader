import React, { useEffect, useState } from "react";

//Components
import { CreateCardForm } from "./CreateCardForm";
import { Loading } from "../common/Loading";
import { ModalBG, Inspect } from "../common/ui/modal";

//Utility
import { stringToArray } from "../Utility/utilities";

export const Edit = ({
  props,
  savedStories,
  setSavedStories,
  tags,
  setTags,
}) => {
  const { match, history } = props;
  const [modal, setModal] = useState({
    inspect: false,
    current: null,
  });
  const [preload, setPreload] = useState(null);

  // Populates form fields with current values
  useEffect(() => {
    const paramId = match.params.id;
    const current = savedStories.filter((story) => story.id === paramId)[0];
    if (!current) return history.push("/read");
    const authorsTemp = stringToArray(current.story.byline);
    console.log(current.id);
    setPreload({
      title: current.story.title,
      description: current.story.lead,
      imgUrl: current.story.imgUrl,
      url: current.story.url,
      tags: current.tags.map((item, i) => {
        {
          return { value: item, index: i };
        }
      }),
      authors: authorsTemp.map((item, i) => {
        return { value: item, index: i };
      }),
      id: current.id,
    });
  }, []);
  return (
    <React.Fragment>
      <ModalBG current={modal.inspect}>
        <Inspect modal={modal} setModal={setModal}></Inspect>
      </ModalBG>
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
