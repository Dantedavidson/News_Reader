//Shared state for home page, renders components

import React, { useEffect, useState, useRef } from "react";

//API
import { getSearchStories } from "../../API";

//Components
import { NewsSearchForm } from "./NewsSearchForm";
import { NewsCardGrid } from "./NewsCardGrid";
import { HorizontalLine } from "../common/HorizontalLine";
import { FormButton } from "../UI/FormButton.style";
import { CarouselComponent } from "./CarouselComponent";
import { PaginationBar } from "../common/PaginationBar";
import { ModalBG } from "../UI/modal";

//Utilities
import { likeStatus, createCard, getPages } from "../Utility/utilities";

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
    displayPagination: false,
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

  //Ref && function for scrolling
  const topLine = useRef(null);
  const executeScroll = () => {
    const yOffset = -24;
    const y =
      topLine.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

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

    // Set Loading && scroll top
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
        executeScroll();
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [query.currentPage]);
  return (
    <React.Fragment>
      <div className="body home">
        <ModalBG current={currentDisplay}>
          <NewsSearchForm
            setQuery={setQuery}
            initialQuery={initialQuery}
            currentDisplay={currentDisplay}
            setCurrentDisplay={setCurrentDisplay}
            savedStories={savedStories}
          />
        </ModalBG>

        <CarouselComponent
          cards={topStories}
          loading={loadingTopStories}
          savedStories={savedStories}
          setSavedStories={setSavedStories}
        />
        <HorizontalLine
          topLine={topLine}
          xPercent={80}
          yPx={2}
          xm={3}
          ym={3}
        ></HorizontalLine>

        {
          {
            start: (
              <React.Fragment>
                <FormButton
                  handler={() => {
                    setCurrentDisplay("modal");
                  }}
                  text="Search"
                ></FormButton>
                <HorizontalLine
                  xPercent={80}
                  yPx={2}
                  xm={3}
                  ym={3}
                ></HorizontalLine>
              </React.Fragment>
            ),
            modal: <div className="block"></div>,
            results: (
              <React.Fragment>
                <NewsCardGrid
                  query={query}
                  setQuery={setQuery}
                  savedStories={savedStories}
                  setSavedStories={setSavedStories}
                  currentDisplay={currentDisplay}
                  setCurrentDisplay={setCurrentDisplay}
                />
                <HorizontalLine
                  id={"bottom"}
                  xPercent={80}
                  yPx={2}
                  xm={3}
                  ym={3}
                ></HorizontalLine>
                <div className="button-container">
                  <PaginationBar
                    size={"lg"}
                    query={query}
                    setQuery={setQuery}
                  ></PaginationBar>
                  <FormButton
                    handler={() => {
                      setCurrentDisplay("modal");
                    }}
                    text="New Search"
                  ></FormButton>
                </div>
              </React.Fragment>
            ),
          }[currentDisplay]
        }
      </div>
    </React.Fragment>
  );
};
