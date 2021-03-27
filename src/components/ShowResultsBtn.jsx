import React from "react";

export const ShowResultsBtn = ({ currentDisplay }) => {
  return (
    <button
      className={
        currentDisplay === "form" ? "display new-search-btn" : "new-search-btn"
      }
      type="submit"
    >
      <p>Submit Search</p>
    </button>
  );
};
