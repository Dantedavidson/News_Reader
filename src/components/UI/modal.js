import styled from "styled-components";
import { flexContainer } from "../Utility/mixins";

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
    props.active &&
    `
  visibility: visible;
  opacity: 1;
  `}
`;

export const Modal = styled.div``;
