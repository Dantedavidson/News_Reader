import React from "react";
import { CarouselComponent } from "./CarouselComponent";
import { HorizontalLine } from "./common/HorizontalLine";
import { Loading } from "./common/Loading";
export const CarouselContainer = ({
  topStories,
  loading,
  savedStories,
  setSavedStories,
}) => {
  return (
    <React.Fragment>
      {loading ? (
        <div className="loading-news-container">
          <h2>Loading News</h2>
          <Loading></Loading>
          <HorizontalLine></HorizontalLine>
        </div>
      ) : (
        <React.Fragment>
          <div className="carousel-container">
            <CarouselComponent
              cards={topStories}
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
