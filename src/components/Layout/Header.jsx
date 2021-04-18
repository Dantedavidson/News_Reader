//Header component
import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ current }) => {
  return (
    <div className="nav">
      <h1>News Reader</h1>
      <div>
        <Link to="/">
          <div>
            <h3>Home</h3>
            <span></span>
          </div>
        </Link>
        <Link to="/create">
          <div>
            {" "}
            <h3>Create</h3>
            <span></span>
          </div>
        </Link>
        <Link to="/Read">
          <div>
            <h3>Read</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
