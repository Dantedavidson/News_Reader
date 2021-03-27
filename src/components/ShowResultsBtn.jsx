import React from "react";

export const ShowResultsBtn = ({ setCurrentDisplay }) => {
  const showResults = () => {
    setCurrentDisplay("results");
  };

  const handleSubmit = () => {
    console.log("form submitted");
    showResults();
  };
  return (
    <div className="new-search-btn" onClick={handleSubmit}>
      <p>Submit Search</p>
    </div>
  );
};
