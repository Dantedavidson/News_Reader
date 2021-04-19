import React, { useState, useEffect } from "react";

//Components
import { Button } from "./ui/ui";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { paginationDisplay, getPages } from "../Utility/utilities";

export const InspectModalComponent = ({ modal, setModal, className }) => {
  const initial = {
    total: null,
    first: null,
    last: null,
    perPage: 4,
    current: null,
    displayRange: [],
  };
  const [pagination, setPagination] = useState(initial);

  //Close Modal and reset state to initial
  const handleClose = () => {
    setModal((prevState) => ({
      ...prevState,
      inspect: false,
      current: null,
    }));
    setPagination(initial);
  };
  //Sets pagination to display up to first four tags
  useEffect(() => {
    if (!modal.current) return;
    setPagination((prevState) => ({
      ...prevState,
      current: 1,
    }));
  }, [modal.inspect]);
  //Calculations for pagination
  useEffect(() => {
    if (!pagination.current) return;
    console.log(modal.current);
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
    <div className={className}>
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

      <Button className="close" handler={handleClose} text={"Close"}></Button>
    </div>
  ) : (
    <div></div>
  );
};
