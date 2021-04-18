//Header component
import React from "react";
import { Link } from "react-router-dom";

//Styled Components
import { HeaderContainer, VerticleLine } from "./ui";

export const Header = ({ current }) => {
  return (
    <HeaderContainer>
      <h1>News Reader</h1>
      <div>
        <Link to="/">
          <div>
            <h3>Home</h3>
            <VerticleLine></VerticleLine>
          </div>
        </Link>
        <Link to="/create">
          <div>
            {" "}
            <h3>Create</h3>
            <VerticleLine></VerticleLine>
          </div>
        </Link>
        <Link to="/Read">
          <div>
            <h3>Read</h3>
          </div>
        </Link>
      </div>
    </HeaderContainer>
  );
};
