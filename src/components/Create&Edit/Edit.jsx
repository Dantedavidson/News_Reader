import React, { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

//Components

import { CreateCardForm } from "./CreateCardForm";

import { Loading } from "../common/Loading";

//Utility
import { stringToArray } from "../Utility/utilities";

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

  //   arr.map((item,i) =>{
  // return  {value:item,index:i}
  // })

  return (
    <React.Fragment>
      <div
        className={
          modal.inspect || modal.edit ? "modal-bg bg-active" : "modal-bg"
        }
      >
        {/* <InspectModal modal={modal} setModal={setModal}></InspectModal> */}
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
