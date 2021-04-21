//Draws a line
import React from "react";

export const LineComponent = ({
  className,
  topLine,
  xPercent,
  yPx,
  xm,
  ym,
}) => {
  return (
    <span ref={topLine} className={className}>
      {" "}
    </span>
  );
};
