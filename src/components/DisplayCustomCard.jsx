import React, { useState, useEffect } from "react";

//Components
import { Tag } from "./common/Tag";

//Libraries
import uuid from "react-uuid";

//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { formatAuthors, paginationDisplay, shift } from "./utilities";

export const DisplayCustomCard = ({ userInput, setUserInput }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(userInput.tag.length / 2);
  const indexOfLastPost = currentPage * 2;
  const indexOfFirstPost = indexOfLastPost - 2;
  let currentPosts = paginationDisplay(
    indexOfFirstPost,
    indexOfLastPost,
    userInput.tag
  );

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      currentPosts = paginationDisplay(
        indexOfFirstPost,
        indexOfLastPost,
        userInput.tag
      );
    }
  }, [userInput]);

  return (
    <div className="custom-card">
      <div>
        <h3>Title</h3>
        <p>{userInput.title}</p>
      </div>
      <div>
        {" "}
        <h3>Description</h3>
        <p>{userInput.description}</p>
      </div>
      <div>
        <h3>Authors</h3>
        <p className="author">{userInput.author.join(", ")}</p>
      </div>
      <div>
        {" "}
        <h3>Date</h3>
        <p>30/03/2021</p>
      </div>
    </div>
  );
};
{
  /* <div
className="arrow display"
id="left"
onClick={(e) => {
  shift(e, setCurrentPage, currentPage);
}}
>
<FontAwesomeIcon
  icon={faAngleLeft}
  className={currentPage === 1 ? "" : "display"}
></FontAwesomeIcon>
</div>
<div className="tag-grid">
{userInput.tag.length === 0 ? (
  <h4>Tags</h4>
) : (
  currentPosts.map((item) => {
    return (
      <Tag
        title={item}
        key={uuid()}
        tags={userInput.tag}
        setTags={setUserInput}
      ></Tag>
    );
  })
)}
</div>
<div
className="arrow display"
id="right"
onClick={(e) => {
  shift(e, setCurrentPage, currentPage);
}}
>
<FontAwesomeIcon
  icon={faAngleRight}
  className={
    currentPage === totalPages || userInput.tag.length === 0
      ? ""
      : "display"
  }
></FontAwesomeIcon>
</div> */
}
