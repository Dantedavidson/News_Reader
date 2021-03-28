import React from "react";
import Carousel from "react-bootstrap/Carousel";
import uuid from "react-uuid";
import { CarouselItem } from "./CarouselItem";

export const CarouselComponent = ({ cards, savedStories, setSavedStories }) => {
  return (
    <Carousel fade controls={false}>
      {cards.map((card) => {
        return (
          <Carousel.Item interval={100000} key={uuid()}>
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
  );
};
