import { React, useState } from "react";
import { CarouselComponent } from "./CarouselComponent";

import { NewsSearchForm } from "./NewsSearchForm";
import { NewsCardGrid } from "./NewsCardGrid";
import { ShowFormBtn } from "./ShowFormBtn";
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
      <div className="search-button-container">
        <ShowFormBtn
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          setContainerDisplay={setContainerDisplay}
        />
      </div>
      <NewsCardGrid currentDisplay={currentDisplay} />
      <NewsSearchForm
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
      <HorizontalLine />
    </div>
  );
};
