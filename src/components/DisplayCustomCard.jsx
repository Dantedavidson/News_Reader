import React, { useState, useEffect } from "react";

//Components
import { Tag } from "./common/Tag";

//Libraries
import uuid from "react-uuid";

//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { formatAuthors } from "./utilities";

export const DisplayCustomCard = ({ userInput, setUserInput }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const shift = (e) => {
    if (e.currentTarget.id === "left") {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const getCurrentPosts = () => {
    console.log(`current posts ${typeof userInput.tag}`);
    return userInput.tag.slice(indexOfFirstPost, indexOfLastPost);
  };

  const totalPages = Math.ceil(userInput.tag.length / 2);
  const indexOfLastPost = currentPage * 2;
  const indexOfFirstPost = indexOfLastPost - 2;
  let currentPosts = getCurrentPosts();

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      currentPosts = getCurrentPosts();
    }
  }, [userInput]);

  return (
    <div className="custom-card">
      <h3>{userInput.title}</h3>
      <p>{userInput.description}</p>
      <div>
        <h6 className="author">{formatAuthors(userInput.author)}</h6>
        <h6>30/03/2021</h6>
      </div>
      <div className="arrow display" id="left" onClick={shift}>
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
      <div className="arrow display" id="right" onClick={shift}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={
            currentPage === totalPages || userInput.tag.length === 0
              ? ""
              : "display"
          }
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
