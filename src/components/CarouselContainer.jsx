import React from "react";
import { CarouselComponent } from "./CarouselComponent";
export const CarouselContainer = () => {
  return (
    <React.Fragment>
      <div className="carousel-container">
        <CarouselComponent />
      </div>
      <span className="horizontal-line"> </span>
    </React.Fragment>
  );
};
