import React from "react";
import { CarouselComponent } from "./CarouselComponent";
import { HorizontalLine } from "./common/HorizontalLine";
export const CarouselContainer = ({
  topStories,
  loading,
  savedStories,
  setSavedStories,
}) => {
  return (
    <React.Fragment>
      {loading ? (
        <h1>Hello World</h1>
      ) : (
        <React.Fragment>
          <div className="carousel-container">
            <CarouselComponent
              topStories={topStories}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
            />
          </div>
          <HorizontalLine />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
