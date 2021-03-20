import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ current }) => {
  return (
    <div className="nav">
      <h1>News Reader</h1>
      <div>
        <Link to="/">
          <div>
            <h3 className={current === "home" ? "current" : ""}>Home</h3>
            <span className="verticle-line"></span>
          </div>
        </Link>
        <Link to="custom">
          <div>
            {" "}
            <h3 className={current === "custom" ? "current" : ""}>Create</h3>
            <span className="verticle-line"></span>
          </div>
        </Link>
        <Link to="stories">
          <div>
            <h3 className={current === "stories" ? "current" : ""}>Read</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
