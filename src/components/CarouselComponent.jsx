import React from "react";
import Carousel from "react-bootstrap/Carousel";
import uuid from "react-uuid";
import { CarouselItem } from "./CarouselItem";
import { HorizontalLine } from "./common/HorizontalLine";
import { Loading } from "./common/Loading";

export const CarouselComponent = ({
  cards,
  savedStories,
  setSavedStories,
  loading,
}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
