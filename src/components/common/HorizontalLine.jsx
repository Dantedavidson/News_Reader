//Draws a line
import React from "react";
import styled from "styled-components";

export const HorizontalLine = ({
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
