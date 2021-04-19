import styled, { css } from "styled-components";
import { flexContainer, lineHelper } from "../../Utility/mixins";

//Components
import { NewsCard } from "../NewsCard";
import { ButtonComponent } from "../ButtonComponent";
import { LineComponent } from "../LineComponent";
import { LikeBtn } from "../LikeBtn";
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
  width: 350px;
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
  ${(props) =>
    props.cls === "home-bot" &&
    css`
      width: 450px;
      margin: 0;
    `}
`;

export const Line = styled(LineComponent)`
  display: block;
  ${lineHelper}
  background-color: #000;
`;

export const Heart = styled(LikeBtn)`
  cursor: pointer;
  transform: translateY(-0.2rem) scale(1.3);
`;

//${({ theme }) => theme.colors.card}
export const StyledLoader = styled.div`
  ${flexContainer("row", "center")};
  height: 200px;

  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #000;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;
