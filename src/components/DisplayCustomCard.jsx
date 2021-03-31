import React from "react";
import uuid from "react-uuid";
import { Tag } from "./common/Tag";

export const DisplayCustomCard = ({ userInput }) => {
  return (
    <div className="custom-card">
      <h3>{userInput.title}</h3>
      <p>{userInput.description}</p>
      <div>
        <h6>{userInput.author}</h6>
        <h6>30/03/2021</h6>
      </div>
      {userInput.tag.length === 0 ? (
        <h4>Tags</h4>
      ) : (
        userInput.tag.map((item) => {
          return <Tag title={item} key={uuid()}></Tag>;
        })
      )}
    </div>
  );
};
