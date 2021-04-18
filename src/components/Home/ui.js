import styled from "styled-components";
import { flexContainer } from "../Utility/mixins";

// Components
import { CarouselComponent } from "./CarouselComponent";
import { CarouselItemComponent } from "./CarouselItemComponent";
import { NewsCardGrid } from "./NewsCardGrid";

//styles

export const CarouselItem = styled(CarouselItemComponent)`
  width: 100%;
  display: grid !important;
  grid-template-columns: repeat(2, 1fr);
  height: 400px;

  > div {
    min-height: 300px;
  }

  > div:nth-child(1) {
    width: 100%;
    ${flexContainer("row", "center", "center", "center")};
    img {
      margin: auto;
      max-width: 80%;
      max-height: 100%;
    }
  }
  div:nth-child(2) {
    ${flexContainer("column", "space-between", "center", "center")};
    width: 100%;
    font-family: "Roboto", sans-serif;
    h2 {
      font-weight: bold;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.4rem;
      width: 95%;
    }
    p {
      margin: 0;
      justify-self: flex-end;
    }

    div:nth-child(2) {
      width: 95%;
      margin-bottom: 1rem;
      ${flexContainer("row", "space-between", "center", "center")};
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  .carousel-item.active {
    opacity: 1 !important;
    display: block;
  }
`;

export const Grid = styled(NewsCardGrid)`
  display: grid;
  width: 80%;
  margin: auto;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  grid-auto-rows: auto;
  row-gap: 3rem;
  column-gap: 10%;

  > h3 {
    grid-column: 1/4;
    text-align: center;
  }
`;

export const Body = styled.div`
  width: 80%;
  min-height: 60vh;
  margin: 3rem auto;
`;
