import React from "react";

export const NewSearchBtn = ({
  formDisplay,
  setFormDisplay,
  cardDisplay,
  setCardDisplay,
  containerDisplay,
  setContainerDisplay,
}) => {
  const toggleDisplay = () => {
    if (!formDisplay && !cardDisplay) {
      setFormDisplay(true);
      setContainerDisplay(true);
      return;
    }
    if (formDisplay) {
      setFormDisplay(!formDisplay);
      setTimeout(() => {
        setCardDisplay(!cardDisplay);
      }, 1000);
    } else {
      setCardDisplay(!cardDisplay);
      setTimeout(() => {
        setFormDisplay(!formDisplay);
      }, 1000);
    }
  };

  return (
    <div className="new-search-btn" onClick={toggleDisplay}>
      <p>New Search</p>
    </div>
  );
};
