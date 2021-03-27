import { React, useState } from "react";
import { CarouselComponent } from "./CarouselComponent";

import { NewsSearchForm } from "./NewsSearchForm";
import { NewsCardGrid } from "./NewsCardGrid";
import { SearchButtonContainer } from "./SearchButtonContainer";
import { HorizontalLine } from "./common/HorizontalLine";
export const SearchContainer = () => {
  const [currentDisplay, setCurrentDisplay] = useState("start");
  const [containerDisplay, setContainerDisplay] = useState(false);

  return (
    <div
      className={
        containerDisplay ? "display search-container" : "search-container"
      }
    >
      <SearchButtonContainer
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
        setContainerDisplay={setContainerDisplay}
      />
      <NewsCardGrid currentDisplay={currentDisplay} />
      <NewsSearchForm currentDisplay={currentDisplay} />
      <HorizontalLine />
    </div>
  );
};
