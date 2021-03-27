import React from "react";

export const ShowResultsBtn = ({ currentDisplay, setCurrentDisplay }) => {
  const showResults = () => {
    setCurrentDisplay("results");
  };

  const handleSubmit = () => {
    console.log("form submitted");
    showResults();
  };
  return (
    <div
      className={
        currentDisplay === "form" ? "display new-search-btn" : "new-search-btn"
      }
      onClick={handleSubmit}
    >
      <p>Submit Search</p>
    </div>
  );
};
