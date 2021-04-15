//Button component. Takes text to display and a onclick funtion.

import React from "react";

export const Button = ({ handler, text, clss }) => {
  return (
    <div className={`button ${clss}`} onClick={handler}>
      {text}
    </div>
  );
};
