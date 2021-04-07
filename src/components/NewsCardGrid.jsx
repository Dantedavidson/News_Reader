import React, { useEffect } from "react";

//components
import { NewsCard } from "./NewsCard";
import { Button } from "./common/Button";
import { PaginationBar } from "./common/PaginationBar";
import { Loading } from "./common/Loading";

export const NewsCardGrid = ({
  currentDisplay,
  setCurrentDisplay,
  query,
  setQuery,
  savedStories,
  setSavedStories,
}) => {
  useEffect(() => {
    console.log(query);
  }, [query]);
  return query.loading ? (
    <React.Fragment>
      <Loading></Loading>
    </React.Fragment>
  ) : (
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
      <PaginationBar query={query} setQuery={setQuery}></PaginationBar>
    </React.Fragment>
  );
};
