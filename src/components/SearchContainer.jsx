import { React, useState } from "react";

import { CarouselComponent } from "./CarouselComponent";

import { NewsSearchForm } from "./NewsSearchForm";
import { NewsCardGrid } from "./NewsCardGrid";
import { SearchButtonContainer } from "./SearchButtonContainer";
import { HorizontalLine } from "./common/HorizontalLine";
export const SearchContainer = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [cardDisplay, setCardDisplay] = useState(false);
  const [containerDisplay, setContainerDisplay] = useState(false);

  return (
    <div
      className={
        containerDisplay ? "display search-container" : "search-container"
      }
    >
      <SearchButtonContainer
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
        cardDisplay={cardDisplay}
        setCardDisplay={setCardDisplay}
        containerDisplay={containerDisplay}
        setContainerDisplay={setContainerDisplay}
      />
      <NewsCardGrid cardDisplay={cardDisplay} />
      <NewsSearchForm formDisplay={formDisplay} />
      <HorizontalLine />
    </div>
  );
};
