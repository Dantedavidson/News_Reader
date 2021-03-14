import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ current }) => {
  return (
    <div className="Nav">
      <h1>
        News <br />
        Reader
      </h1>
      <div>
        <Link to="/">
          <h3 className={current === "home" ? "current" : ""}>Home</h3>
        </Link>
        <Link to="custom">
          <h3 className={current === "custom" ? "current" : ""}>
            Custom Story
          </h3>
        </Link>
        <Link to="stories">
          <h3 className={current === "stories" ? "current" : ""}>My Stories</h3>
        </Link>
      </div>
    </div>
  );
};
