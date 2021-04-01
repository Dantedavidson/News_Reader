import React, { useEffect, useState } from "react";

import { getTopStories } from "../../API";
import { createCard, likeStatus } from "../utilities";

//Components
import { Nav } from "../Nav";
import { NewsSearchForm } from "../NewsSearchForm";
import { NewsCardGrid } from "../NewsCardGrid";
import { HorizontalLine } from "../common/HorizontalLine";
import { Button } from "../common/Button";
import { Footer } from "../Footer";
import { CarouselComponent } from "../CarouselComponent";

export const Home = ({ savedStories, setSavedStories, data }) => {
  const [topStories, setTopStories] = useState([]);
  const [loadingTopStories, setLoadingTopStories] = useState(true);
  const [currentDisplay, setCurrentDisplay] = useState("start");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      console.log("i returned");
      return;
    }
    let stories = data.map((item) => {
      item.like = likeStatus(savedStories, item);
      return item;
    });
    setTopStories(stories);
    setLoadingTopStories(false);
  }, [data]);
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <NewsSearchForm
        setSearchResults={setSearchResults}
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
              searchResults={searchResults}
              savedStories={savedStories}
              setSavedStories={setSavedStories}
              currentDisplay={currentDisplay}
              setCurrentDisplay={setCurrentDisplay}
            />
          ),
        }[currentDisplay]
      }
      <HorizontalLine></HorizontalLine>

      <Footer />
    </React.Fragment>
  );
};
