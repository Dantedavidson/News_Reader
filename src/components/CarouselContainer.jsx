import React from "react";
import { CarouselComponent } from "./CarouselComponent";
import { HorizontalLine } from "./common/HorizontalLine";
export const CarouselContainer = () => {
  return (
    <React.Fragment>
      <div className="carousel-container">
        <CarouselComponent />
      </div>
      <HorizontalLine />
    </React.Fragment>
  );
};
