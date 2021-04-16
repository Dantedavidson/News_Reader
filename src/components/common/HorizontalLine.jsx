//Draws a line
import React from "react";
import styled from "styled-components";

export const HorizontalLine = ({ topLine, xPercent, yPx, xm, ym }) => {
  const Line = styled.span`
    display: block;
    width: ${xPercent}%;
    height: ${yPx}px;
    margin: ${xm}rem auto ${ym}rem auto;
    background-color: #000;
  `;
  return <Line ref={topLine}> </Line>;
};
