import React from "react";
import { NewSearchBtn } from "./NewSearchBtn";

export const SearchButtonContainer = () => {
  return (
    <div className="search-button-container">
      <NewSearchBtn />
      <span className="horizontal-line"> </span>
    </div>
  );
};
