import React from "react";

import { CarouselComponent } from "./CarouselComponent";

import { NewsSearchForm } from "./NewsSearchForm";
import { NewsCardGrid } from "./NewsCardGrid";
import { SearchButtonContainer } from "./SearchButtonContainer";
export const SearchContainer = () => {
  return (
    <div className="search-container">
      <NewsSearchForm />
      <SearchButtonContainer />
    </div>
  );
};
