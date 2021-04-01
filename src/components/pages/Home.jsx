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

export const Home = ({ savedStories, setSavedStories }) => {
  const [topStories, setTopStories] = useState([]);
  const [loadingTopStories, setLoadingTopStories] = useState(true);
  const [currentDisplay, setCurrentDisplay] = useState("start");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getTopStories();
      const cards = createCard(data);
      setTopStories([...cards]);
      setLoadingTopStories(false);
    }
    getData();
  }, []);
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <NewsSearchForm
        setSearchResults={setSearchResults}
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
      <CarouselComponent
        cards={topStories}
        loading={loadingTopStories}
        savedStories={savedStories}
        setSavedStories={setSavedStories}
      />
      <HorizontalLine></HorizontalLine>
      {currentDisplay === "start" ? (
        <Button
          handler={() => {
            setCurrentDisplay("modal");
          }}
          text="Search"
        ></Button>
      ) : (
        ""
      )}
      {currentDisplay === "results" ? (
        <NewsCardGrid
          searchResults={searchResults}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        />
      ) : (
        ""
      )}
      <HorizontalLine></HorizontalLine>

      <Footer />
    </React.Fragment>
  );
};
