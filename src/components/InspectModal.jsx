import React, { useState, useEffect } from "react";

//Components
import { Button } from "./common/Button";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { paginationDisplay, getPages } from "./utilities";

export const InspectModal = ({ modal, setModal }) => {
  const initial = {
    total: null,
    first: null,
    last: null,
    perPage: 4,
    current: null,
    displayRange: [],
  };
  const [pagination, setPagination] = useState(initial);
  const handleClose = () => {
    setModal((prevState) => ({
      ...prevState,
      inspect: false,
      current: null,
    }));
    setPagination(initial);
  };

  useEffect(() => {
    if (!modal.current) return;
    setPagination((prevState) => ({
      ...prevState,
      current: 1,
    }));
  }, [modal.inspect]);

  useEffect(() => {
    if (!pagination.current) return;
    let totalTemp = getPages(modal.current.tags.length, pagination.perPage);
    let tempLast = pagination.current * pagination.perPage;
    let tempFirst = tempLast - pagination.perPage;
    setPagination((prevState) => ({
      ...prevState,
      total: totalTemp,
      first: tempFirst,
      last: tempLast,
      displayRange: paginationDisplay(tempFirst, tempLast, modal.current.tags),
    }));
  }, [pagination.current]);

  useEffect(() => {
    console.log(pagination.displayRange);
  }, [pagination]);

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
        <div>
          <h2>Tags</h2>
          <div>
            <div data-direction="left"></div>
            <FontAwesomeIcon
              className={pagination.current === 1 ? "" : "display"}
              onClick={() => {
                setPagination((prevState) => ({
                  ...prevState,
                  current: prevState.current - 1,
                }));
              }}
              icon={faAngleLeft}
            ></FontAwesomeIcon>

            {pagination.displayRange.map((item) => (
              <div className="tag">
                <p>{item}</p>
              </div>
            ))}

            <FontAwesomeIcon
              onClick={() => {
                setPagination((prevState) => ({
                  ...prevState,
                  current: prevState.current + 1,
                }));
              }}
              className={
                pagination.current === pagination.total ||
                modal.current.tags.length === 0
                  ? ""
                  : "display"
              }
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
        </div>
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
