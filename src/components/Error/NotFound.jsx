//404 page
import React from "react";
import Styled from "styled-components";

const Body = Styled.div`
height: 60vh;
width: 100vw;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;



h1{
  font-weight: 500;
  font-size: 2rem;
}
`;

export const NotFound = () => {
  return (
    <Body>
      <h1>Sorry, we couldnt find the page you were looking for.</h1>
    </Body>
  );
};
