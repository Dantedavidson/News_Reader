import { React, useState } from "react";

import { CarouselComponent } from "./CarouselComponent";

import { NewsSearchForm } from "./NewsSearchForm";
import { NewsCardGrid } from "./NewsCardGrid";
import { SearchButtonContainer } from "./SearchButtonContainer";
export const SearchContainer = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [cardDisplay, setCardDisplay] = useState(false);

  return (
    <div className="search-container">
      <NewsCardGrid cardDisplay={cardDisplay} />
      <NewsSearchForm formDisplay={formDisplay} />
      <SearchButtonContainer
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
        cardDisplay={cardDisplay}
        setCardDisplay={setCardDisplay}
      />
    </div>
  );
};
