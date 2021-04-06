import React from "react";

//components
import { NewsCard } from "./NewsCard";
import { Button } from "./common/Button";
import { PaginationBar } from "./common/PaginationBar";

export const NewsCardGrid = ({
  currentDisplay,
  setCurrentDisplay,
  query,
  setQuery,
  savedStories,
  setSavedStories,
}) => {
  return (
    <React.Fragment>
      <div className="news-card-grid">
        {query.results.map((card) => {
          return (
            <NewsCard
              card={card}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
            ></NewsCard>
          );
        })}
      </div>
      <div className="button-container">
        <Button
          handler={() => {
            setCurrentDisplay("modal");
          }}
          text="New Search"
        ></Button>
        <Button
          handler={() => {
            console.log("Load More");
          }}
          text="Load More"
        ></Button>
      </div>
      <PaginationBar
        currentPage={query.currentPage}
        total={query.total}
        perPage={10}
        setQuery={setQuery}
      ></PaginationBar>
    </React.Fragment>
  );
};
