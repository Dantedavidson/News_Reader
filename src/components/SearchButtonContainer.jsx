import React from "react";
import { NewSearchBtn } from "./NewSearchBtn";

export const SearchButtonContainer = ({
  formDisplay,
  setFormDisplay,
  cardDisplay,
  setCardDisplay,
}) => {
  return (
    <div className="search-button-container">
      <NewSearchBtn
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
        cardDisplay={cardDisplay}
        setCardDisplay={setCardDisplay}
      />
      <span className="horizontal-line"> </span>
    </div>
  );
};
