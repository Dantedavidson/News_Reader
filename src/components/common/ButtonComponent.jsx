//Button component. Takes text to display and a onclick funtion.

import React from "react";

export const ButtonComponent = ({ cls, width, handler, text, className }) => {
  return (
    <div className={className} width={width} cls={cls} onClick={handler}>
      {text}
    </div>
  );
};
