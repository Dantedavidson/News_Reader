import { React, useState, useEffect } from "react";
import { CarouselComponent } from "./CarouselComponent";

import { NewsSearchForm } from "./NewsSearchForm";
import { NewsCardGrid } from "./NewsCardGrid";
import { ShowFormBtn } from "./ShowFormBtn";
import { HorizontalLine } from "./common/HorizontalLine";
export const SearchContainer = ({ savedStories, setSavedStories }) => {
  const [currentDisplay, setCurrentDisplay] = useState("start");
  const [containerDisplay, setContainerDisplay] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    console.log("search container rendered");
  }, []);
  return (
    <div
      className={
        containerDisplay ? "display search-container" : "search-container"
      }
    >
      <div className="search-button-container">
        <ShowFormBtn
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          setContainerDisplay={setContainerDisplay}
        />
      </div>
      <NewsCardGrid
        currentDisplay={currentDisplay}
        searchResults={searchResults}
        savedStories={savedStories}
        setSavedStories={setSavedStories}
      />
      <NewsSearchForm
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
        setSearchResults={setSearchResults}
      />
      <HorizontalLine />
    </div>
  );
};
