import React from "react";
import Carousel from "react-bootstrap/Carousel";
import uuid from "react-uuid";
import { CarouselItem } from "./CarouselItem";

export const CarouselComponent = ({
  topStories,
  savedStories,
  setSavedStories,
}) => {
  return (
    <Carousel fade controls={false}>
      {topStories.map((story) => {
        return (
          <Carousel.Item interval={1000000} key={uuid()}>
            <CarouselItem
              story={story}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
