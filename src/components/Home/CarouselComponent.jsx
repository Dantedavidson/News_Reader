//Displays loading gif or carousel items.
import React from "react";
import styled from "styled-components";
import { flexContainer } from "../Utility/mixins";
//Libraries
import Carousel from "react-bootstrap/Carousel";
import uuid from "react-uuid";

//Components

import { Loading } from "../common/Loading";
import { CarouselItem } from "./ui";

const CarouselStyled = styled.div`
  width: 100%;
  margin: 3rem auto;
  overflow: hidden;
`;

export const CarouselComponent = ({
  cards,
  savedStories,
  setSavedStories,
  loading,
}) => {
  return (
    <div>
      {" "}
      {loading ? (
        <div className="loading-news-container">
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
    </div>
  );
};
