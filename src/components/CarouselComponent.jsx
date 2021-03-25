import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "./CarouselItem";

export const CarouselComponent = ({ topStories }) => {
  return (
    <Carousel fade controls={false}>
      {topStories.map((story) => {
        return (
          <Carousel.Item interval={10000}>
            <CarouselItem story={story} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
