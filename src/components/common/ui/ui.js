import styled, { css } from "styled-components";
import { flexContainer } from "../../Utility/mixins";

//Components
import { NewsCard } from "../NewsCard";
import { ButtonComponent } from "../ButtonComponent";
import { HorizontalLine } from "../HorizontalLine";
import { PaginationBarComponent } from "../PaginationBarComponent";

export const Card = styled(NewsCard)`
  padding: 0.5rem;
  height: 380px;
  width: 300px;
  ${flexContainer("column", "space-between", "flex-start", "flex-start")}
  transition: all 1s;
  font-family: "roboto";
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px ${({ theme }) => theme.colors.textOne} solid;
  h3 {
    height: 80px;
    text-overflow: ellipsis;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h6 {
    margin: 0;
    font-weight: 100;
    font-size: 0.9rem;
  }
  img {
    max-width: 280px;
    height: 140px;
    margin: 0 auto 1rem auto;
  }
  //Overflow ellipse for paragraph over 6 lines
  p {
    height: 140px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .horizontal-line {
    margin: 3px auto 0 auto;
    height: 1px;
    width: 282px;
  }
  //Animate author overflow
  > div:nth-of-type(1) {
    h6:nth-child(1) {
      white-space: nowrap;
      width: 260px;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: text-indent 7s linear;

      &:hover {
        text-indent: -400px;
      }
    }
  }
  > div:nth-of-type(2) {
    width: 90%;
    margin: 0 auto;
    ${flexContainer("row", "space-between", "flex-start", "flex-start")}
    ${(props) =>
      props.single &&
      `
    ${flexContainer("row", "space-around", "flex-start", "flex-start")}
    `}
    > svg {
      cursor: pointer;
    }
  }
`;

export const Button = styled(ButtonComponent)`
  display: block;
  width: 300px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 2rem;
  margin: 0 auto 3rem auto;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
const lineHelper = css`
  width: ${(props) => `${props.xPercent}%`};
  height: ${(props) => ` ${props.yPx}px`};
  margin: ${(props) => `${props.xm}rem`} auto ${(props) => `${props.ym}rem`}
    auto;
`;
export const Line = styled(HorizontalLine)`
  display: block;
  ${lineHelper}
  background-color: #000;
`;

export const PaginationBar = styled(PaginationBarComponent)``;
