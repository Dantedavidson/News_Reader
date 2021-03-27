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
  // const toggleDisplay = () => {
  //   if (!formDisplay && !cardDisplay) {
  //     setFormDisplay(true);
  //     setContainerDisplay(true);
  //     return;
  //   }
  //   if (formDisplay) {
  //     setFormDisplay(!formDisplay);
  //     setTimeout(() => {
  //       setCardDisplay(!cardDisplay);
  //     }, 1000);
  //   } else {
  //     setCardDisplay(!cardDisplay);
  //     setTimeout(() => {
  //       setFormDisplay(!formDisplay);
  //     }, 1000);
  //   }
  // };

  return (
    <div className="new-search-btn" onClick={displayForm}>
      <p>New Search</p>
    </div>
  );
};
