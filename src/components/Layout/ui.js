import styled from "styled-components";

import { flexContainer } from "../Utility/mixins";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  ${flexContainer("row", "space-between")}
  color:${({ theme }) => theme.colors.textTwo};
  font-family: "Titillium Web", sans-serif;
  h1 {
    margin-left: 1.5rem;
    font-size: 4rem;
    font-family: "Merriweather", serif;
  }
  div {
    transform: translateY(-0.2rem) translateX(-1rem);
    ${flexContainer("row", "flex-start")};

    h3 {
      padding: 1rem;
      margin: 0 1rem;
      font-size: 1.5rem;
    }
    h3:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transform: scale(1.2);
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export const VerticleLine = styled.span`
  display: inline-block;
  height: 2rem;
  border-left: 3px solid white;
`;

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  width: 100%;
  font-size: 1.3rem;
  font-family: "Titillium Web", sans-serif;
  margin-top: 3rem;
  > div {
    width: 80%;
    margin: auto;
    padding: 1rem 0;
    ${flexContainer("row", "space-around")};
    > div:nth-child(1) {
      width: 30%;
      padding-bottom: 5rem;
      p a {
        text-decoration: underline;
      }

      p a:hover {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }
    > div:nth-child(2) {
      order: 3;
      width: 30%;
      ${flexContainer("row", "flex-end")};
      div p:hover {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }
    > div:nth-child(3) {
      width: 30%;
      align-self: flex-end;
      order: 2;

      div {
        ${flexContainer("row", "space-between")};
        width: 130px;
        margin: auto;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        div {
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          background-color: #fff;
          color: ${({ theme }) => theme.colors.primary};
        }
        path {
          transform: translateX(14rem);
        }
      }
    }
  }
`;
