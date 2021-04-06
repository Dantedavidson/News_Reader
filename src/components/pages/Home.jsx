import React, { useEffect, useState } from "react";

//Components
import { Nav } from "../Nav";
import { NewsSearchForm } from "../NewsSearchForm";
import { NewsCardGrid } from "../NewsCardGrid";
import { HorizontalLine } from "../common/HorizontalLine";
import { Button } from "../common/Button";
import { Footer } from "../Footer";
import { CarouselComponent } from "../CarouselComponent";

//Utilities
import { likeStatus } from "../utilities";

export const Home = ({ savedStories, setSavedStories, data }) => {
  const initialQuery = {
    total: "",
    results: [],
    currentPage: 0,
  };
  const [topStories, setTopStories] = useState([]);
  const [loadingTopStories, setLoadingTopStories] = useState(true);
  const [currentDisplay, setCurrentDisplay] = useState("start");
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }
    let stories = data.map((item) => {
      item.like = likeStatus(savedStories, item);
      return item;
    });
    setTopStories(stories);
    setLoadingTopStories(false);
  }, [data]);

  useEffect(() => {
    console.log(query.currentPage);
  }, [query.currentPage]);
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <div className="body home">
        <NewsSearchForm
          setQuery={setQuery}
          initialQuery={initialQuery}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          savedStories={savedStories}
        />
        <CarouselComponent
          cards={topStories}
          loading={loadingTopStories}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
        />
        <HorizontalLine></HorizontalLine>

        {
          {
            start: (
              <Button
                handler={() => {
                  setCurrentDisplay("modal");
                }}
                text="Search"
              ></Button>
            ),
            modal: <div className="block"></div>,
            results: (
              <NewsCardGrid
                query={query}
                setQuery={setQuery}
                savedStories={savedStories}
                setSavedStories={setSavedStories}
                currentDisplay={currentDisplay}
                setCurrentDisplay={setCurrentDisplay}
              />
            ),
          }[currentDisplay]
        }
        <HorizontalLine></HorizontalLine>
      </div>
      <Footer />
    </React.Fragment>
  );
};
