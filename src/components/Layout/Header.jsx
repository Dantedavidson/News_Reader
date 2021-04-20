//Header component
import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeButtonComponent } from "../common/ThemeButtonComponent";
import Styled from "styled-components";

//Styled Components
import { HeaderContainer, VerticleLine } from "./ui";

const activeClassName = "nav-item-active";

const StyledNavLink = Styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color:${({ theme }) => theme.colors.highlight};
  }
`;

export const Header = ({ current, children }) => {
  return (
    <HeaderContainer>
      <h1>News Reader</h1>

      <div>
        <StyledNavLink exact to="/">
          <div>
            <h3>Home</h3>
            <VerticleLine></VerticleLine>
          </div>
        </StyledNavLink>
        <StyledNavLink to="/create">
          <div>
            {" "}
            <h3>Create</h3>
            <VerticleLine></VerticleLine>
          </div>
        </StyledNavLink>
        <StyledNavLink to="/Read">
          <div>
            <h3>Read</h3>
          </div>
        </StyledNavLink>
      </div>
      {children}
    </HeaderContainer>
  );
};
