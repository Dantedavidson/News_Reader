import React from "react";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="slider">
      <div>
        <p>Search</p>
        <div class="menu-btn">
          <div class="menu-arrw"></div>
        </div>
      </div>

      <div className="animate">
        <p>The Guardian</p>
      </div>
      <div className="animate">
        <p>Financial Times</p>
      </div>
      <div className="animate">
        <p>The New York Times</p>
      </div>
    </div>
  );
};

export default Slider;
