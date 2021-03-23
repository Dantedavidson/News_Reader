import React from "react";

export const NewSearchBtn = ({
  formDisplay,
  setFormDisplay,
  cardDisplay,
  setCardDisplay,
}) => {
  const toggleDisplay = () => {
    if (!formDisplay && !cardDisplay) {
      setFormDisplay(true);
    } else {
      setFormDisplay(!formDisplay);
      setCardDisplay(!cardDisplay);
    }
  };

  return (
    <div className="new-search-btn" onClick={toggleDisplay}>
      <p>New Search</p>
    </div>
  );
};
