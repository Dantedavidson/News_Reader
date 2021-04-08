import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const EditModal = ({ card, modal, setModal }) => {
  const handleClose = () => {
    setModal((prevState) => ({
      ...prevState,
      edit: false,
      current: null,
    }));
  };
  return (
    <div className={modal.edit ? "modal-custom " : "modal-custom modal-hidden"}>
      <span className="modal-close" onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </span>

      <h1>Edit</h1>
    </div>
  );
};
