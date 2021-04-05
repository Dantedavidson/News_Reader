import React from "react";

export const Tag = ({ title, tags, setTags }) => {
  const removeTag = (e) => {
    let filtered = tags.filter(
      (current) => current !== e.currentTarget.parentNode.id
    );
    setTags((prevState) => {
      return {
        ...prevState,
        tag: filtered,
      };
    });
  };
  return (
    <div className="tag" id={title}>
      <h5>{title}</h5>
      <div onClick={removeTag}>
        <p>X</p>
      </div>
    </div>
  );
};
