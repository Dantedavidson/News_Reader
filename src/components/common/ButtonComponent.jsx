//Button component. Takes text to display and a onclick funtion.

import React from "react";

export const ButtonComponent = ({ handler, text, className }) => {
  return (
    <div className={className} onClick={handler}>
      {text}
    </div>
  );
};
