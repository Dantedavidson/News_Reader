import React from "react";

export const DisplayCustomCard = ({ userInput }) => {
  return (
    <div className="custom-card">
      <h3>{userInput.title}</h3>
      <p>{userInput.description}</p>
      <div>
        <h6>{userInput.author}</h6>
        <h6>30/03/2021</h6>
      </div>
      <div className="tag">
        <h5>{userInput.tag}</h5>
        <div>
          <p>X</p>
        </div>
      </div>
    </div>
  );
};
