import React from "react";

export const ShowFormBtn = ({
  currentDisplay,
  setCurrentDisplay,
  setContainerDisplay,
}) => {
  const displayForm = () => {
    switch (currentDisplay) {
      case "start":
        setCurrentDisplay("form");
        setContainerDisplay(true);
        break;
      case "results":
        setCurrentDisplay("form");
    }
  };

  return (
    <div
      className={
        currentDisplay === "start" || currentDisplay === "results"
          ? "display new-search-btn"
          : "new-search-btn"
      }
      onClick={displayForm}
    >
      <p>New Search</p>
    </div>
  );
};
