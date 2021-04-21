//Displays loading gif or carousel items.
import React from "react";
import styled from "styled-components";

//Libraries
import Carousel from "react-bootstrap/Carousel";
import uuid from "react-uuid";

//Components

import { Loading } from "../common/Loading";
import { CarouselItem } from "./ui";

const CarouselStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  div.loading {
    height: 400px;
    h2 {
      margin-top: 3rem;
      text-align: center;
    }
  }
  @media (max-width: 1500px) {
    overflow: visible;
    .carousel-container,
    .carousel-inner {
      overflow: visible;
    }
  }
`;

export const CarouselComponent = ({
  cards,
  savedStories,
  setSavedStories,
  loading,
}) => {
  return (
    <CarouselStyled>
      {" "}
      {loading ? (
        <div className="loading">
          <h2>Loading News</h2>
          <Loading></Loading>
        </div>
      ) : (
        <div className="carousel-container">
          <Carousel fade controls={false}>
            {cards.map((card) => {
              return (
                <Carousel.Item interval={10000} key={uuid()}>
                  <CarouselItem
                    card={card}
                    savedStories={savedStories}
                    setSavedStories={setSavedStories}
                    key={uuid()}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      )}{" "}
    </CarouselStyled>
  );
};
