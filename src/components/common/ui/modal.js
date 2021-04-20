import styled from "styled-components";
import { flexContainer } from "../../Utility/mixins";
import { InspectModalComponent } from "../InspectModalComponent";

export const ModalBG = styled.div`
  padding-top: 6rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s;
  ${(props) =>
    props.current &&
    `
  visibility: visible;
  opacity: 1;
  `}
`;

export const Modal = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.card};
  width: 40%;
  min-width: 340px;
  border-radius: 5px;
  height: 640px;
  border-radius: 5px;

  h3 {
    margin-top: 1.5rem;
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.textOne};
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    svg {
      height: 1.3rem;
      width: 1.3rem;
    }
  }
`;

export const Inspect = styled(InspectModalComponent)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.card};
  width: 40%;
  min-width: 340px;
  border-radius: 5px;
  height: 640px;
  border-radius: 5px;
  padding: 1rem;
  height: auto;

  padding: 1rem;
  height: auto;
  ${flexContainer("column", "space-between")};

  .modal-inner {
    font-family: "roboto";
    h3 {
      font-size: 1.5rem;
    }
    > div:nth-of-type(1) {
      ${flexContainer("row", "flex-start")};
      height: 40px;
      margin-bottom: 1rem;
      h2 {
        font-size: 1.6rem;
        font-weight: 400;
        margin-right: 4rem;
      }

      > div {
        padding-top: 3px;

        ${flexContainer("row", "flex-start")};
        width: 600px;
        svg,
        .tag {
          margin-right: 5px;
        }
        svg {
          display: none;
          align-self: center;
          transform: scale(1.5);
          cursor: pointer;
          &.display {
            display: initial;
          }
        }

        .tag {
          display: inline-block;
          width: 130px;
          height: 30px;
          border: 1px solid;

          p {
            padding: 3px;
            margin: 0;
          }
        }
      }
    }

    > div:nth-of-type(2) {
      margin-bottom: 0.5rem;
      h4 {
        margin: 0;
        font-size: 1.3rem;
        font-weight: 300;
      }
    }

    h1 {
      font-size: 2rem;
    }

    h3 {
      font-weight: 300;
    }

    img {
      display: block;
      max-height: 300px;
      max-width: 600px;
      margin: 2rem auto;
    }
  }

  div.close {
    height: 38px;
    font-size: 24px;
    width: 260px;
    line-height: 38px;
    margin: 0 auto;
  }
`;
