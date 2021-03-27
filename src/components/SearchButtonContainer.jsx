import React from "react";
import { ShowFormBtn } from "./ShowFormBtn";
import { ShowResultsBtn } from "./ShowResultsBtn";

export const SearchButtonContainer = ({
  setContainerDisplay,
  currentDisplay,
  setCurrentDisplay,
}) => {
  if (currentDisplay === "start" || currentDisplay === "results") {
    return (
      <div className="search-button-container">
        <ShowFormBtn
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          setContainerDisplay={setContainerDisplay}
        />
      </div>
    );
  } else {
    return (
      <div className="search-button-container">
        <ShowResultsBtn
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        ></ShowResultsBtn>
      </div>
    );
  }
};
