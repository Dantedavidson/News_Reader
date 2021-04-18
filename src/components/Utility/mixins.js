export const flexContainer = (
  direction,
  justify,
  alignItems = "center",
  alignContent = "center"
) =>
  `display:flex; flex-direction:${direction};justify-content:${justify};align-items:${alignItems};align-content:${alignContent};`;
