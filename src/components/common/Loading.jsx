//Loading effect
import React from "react";
import { StyledLoader } from "./ui/ui";

export const Loading = () => {
  return (
    <StyledLoader>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoader>
  );
};
