import React, { useState } from "react";
import { uuid } from "react-uuid";

//Components
import { Button } from "./common/Button";
import { Tag } from "./common/Tag";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { paginationDisplay, shift } from "./utilities";

export const InspectModal = ({ modal, setModal }) => {
  const handleClose = () => {
    setModal((prevState) => ({
      ...prevState,
      inspect: false,
      current: null,
    }));
  };

  return modal.current ? (
    <div
      className={
        modal.inspect
          ? "modal-custom modal-inspect"
          : "modal-custom modal-hidden"
      }
    >
      <div className="modal-inner">
        <h1>{modal.current.story.title}</h1>
        <h3>{modal.current.story.lead}</h3>
        <img src={modal.current.story.imgUrl} alt="" />
        <div className="arrow display" id="left"></div>
        <div>
          <h4>{modal.current.story.byline}</h4>
          <h4>{modal.current.story.date}</h4>
        </div>
      </div>

      <Button handler={handleClose} text={"Close"}></Button>
    </div>
  ) : (
    <div></div>
  );
};
