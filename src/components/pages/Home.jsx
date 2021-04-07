//Shared state for home page, renders components

import React, { useEffect, useState } from "react";

//API
import { getSearchStories } from "../../API";

//Components
import { Nav } from "../Nav";
import { NewsSearchForm } from "../NewsSearchForm";
import { NewsCardGrid } from "../NewsCardGrid";
import { HorizontalLine } from "../common/HorizontalLine";
import { Button } from "../common/Button";
import { Footer } from "../Footer";
import { CarouselComponent } from "../CarouselComponent";

//Utilities
import {
  likeStatus,
  createCard,
  paginationDisplay,
  getPages,
} from "../utilities";

export const Home = ({ savedStories, setSavedStories, data }) => {
  //Object containing query and pagination data
  const initialQuery = {
    total: null,
    results: [],
    perPage: 10,
    pages: null,
    currentPage: null,
    queryString: null,
    loading: false,
    active: null,
    items: [],
    firstDisplay: null,
    lastDisplay: null,
    pageRange: [],
  };
  const [topStories, setTopStories] = useState([]);
  const [loadingTopStories, setLoadingTopStories] = useState(true);
  const [currentDisplay, setCurrentDisplay] = useState("start");
  const [query, setQuery] = useState(initialQuery);
  //check if stories from api have been saved, set like status accordingly
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

  //Make Api Call when currentPage changes through form or pagination
  useEffect(() => {
    //Check querySting is set
    if (!query.queryString) return;

    // Set Loading
    setQuery((prevState) => ({
      ...prevState,
      loading: true,
    }));

    // Api Call
    async function getData() {
      try {
        let res = await getSearchStories(
          `${query.queryString}&page=${query.currentPage}`
        );
        let totalTemp =
          res.data.response.meta.hits > 1000
            ? 1000
            : res.data.response.meta.hits;
        let results = createCard(res.data.response.docs, savedStories);
        let lastTemp =
          getPages(totalTemp, query.perPage) >= 10
            ? 10
            : getPages(totalTemp, query.perPage);
        setQuery((prevState) => ({
          ...prevState,
          total: prevState.total ? prevState.total : totalTemp,
          pages: prevState.pages
            ? prevState.pages
            : getPages(totalTemp, prevState.perPage),
          results: results,
          loading: false,
          active: prevState.active ? prevState.active : 1,
          firstDisplay: prevState.firstDisplay ? prevState.firstDisplay : 0,
          lastDisplay: prevState.lastDisplay ? prevState.lastDisplay : lastTemp,
        }));
      } catch (e) {
        console.log(e);
      }
    }
    getData();
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
