import React from "react";

export const Button = ({ handler, text }) => {
  return (
    <div className="button" onClick={handler}>
      {text}
    </div>
  );
};
