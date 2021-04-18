import { css } from "styled-components";

export const flexContainer = (
  direction,
  justify,
  alignItems = "center",
  alignContent = "center"
) =>
  `display:flex; flex-direction:${direction};justify-content:${justify};align-items:${alignItems};align-content:${alignContent};`;

export const lineHelper = css`
  width: ${(props) => `${props.xPercent}%`};
  height: ${(props) => ` ${props.yPx}px`};
  margin: ${(props) => `${props.xm}rem`} auto ${(props) => `${props.ym}rem`}
    auto;
`;
