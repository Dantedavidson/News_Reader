import React, { useEffect, useState } from "react";

import { getTopStories } from "../../API";
import { createCard } from "../utilities";

//Components
import { Nav } from "../Nav";
import { NewsSearchForm } from "../NewsSearchForm";
import { NewsCardGrid } from "../NewsCardGrid";

import { HorizontalLine } from "../common/HorizontalLine";
import { Button } from "../common/Button";

import { Footer } from "../Footer";
import { CarouselComponent } from "../CarouselComponent";

export const Home = ({
  savedStories,
  setSavedStories,
  topStories,
  setTopStories,
  loadingTopStories,
  setLoadingTopStories,
}) => {
  const [currentDisplay, setCurrentDisplay] = useState("start");
  const [searchResults, setSearchResults] = useState([]);

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
