//Button component. Takes text to display and a onclick funtion.

import React from "react";

export const Button = ({ handler, text }) => {
  return (
    <div className="button" onClick={handler}>
      {text}
    </div>
  );
};
