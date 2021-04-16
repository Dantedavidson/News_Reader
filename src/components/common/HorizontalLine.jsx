//Draws a line
import React from "react";
import styled from "styled-components";
const Line = styled.span`
  display: block;
  width: 80%;
  height: 2px;
  margin: 3rem auto;
  background-color: #000;
`;

export const HorizontalLine = ({ topLine }) => {
  return <Line ref={topLine}> </Line>;
};
