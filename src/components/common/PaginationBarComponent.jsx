//Displays pagination and handles pagination logic
import React, { useEffect } from "react";

//Libraries
import Pagination from "react-bootstrap/Pagination";

//Utilities
import { paginationDisplay, scrollTop } from "../Utility/utilities";

export const PaginationBarComponent = ({ query, setQuery }) => {
  const {
    className,
    pages,
    perPage,
    items,
    active,
    lastDisplay,
    pageRange,
    displayPagination,
  } = query;

  //Takes a number and sets search and display to that number.
  const current = (number) => {
    if (pages < perPage) {
      setQuery((prevState) => ({
        ...prevState,
        active: number,
        currentPage: number - 1,
      }));
      return;
    }

    if (number > pages - perPage) {
      let firstTemp = pages - perPage;
      setQuery((prevState) => ({
        ...prevState,
        active: number,
        currentPage: number - 1,
        firstDisplay: firstTemp,
        lastDisplay: pages,
        pageRange: paginationDisplay(firstTemp, pages, items),
      }));
      return;
    }
    let activeTemp = number;
    let firstTemp = number - 1;
    let lastTemp = number + perPage - 1;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: activeTemp - 1,
      firstDisplay: firstTemp,
      lastDisplay: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  //Increment search and display
  const next = () => {
    if (active >= pages - (perPage - 1) || pages < perPage) {
      setQuery((prevState) => ({
        ...prevState,
        active: prevState.active + 1,
        currentPage: prevState.currentPage + 1,
      }));
      return;
    }
    const activeTemp = active + 1;
    const lastTemp = lastDisplay + 1;
    const firstTemp = lastDisplay - (perPage - 1);
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: activeTemp - 1,
      firstDisplay: firstTemp,
      lastDisplay: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  //Decrement search and display
  const back = () => {
    if (active > pages - (perPage - 1) || pages < perPage) {
      setQuery((prevState) => ({
        ...prevState,
        active: prevState.active - 1,
        currentPage: prevState.currentPage - 1,
      }));
      return;
    }
    const activeTemp = active - 1;
    const lastTemp = lastDisplay - 1;
    const firstTemp = lastDisplay - (perPage + 1);
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: activeTemp - 1,
      firstDisplay: firstTemp,
      lastDisplay: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  //Set search and display to first page
  const firstPage = () => {
    const activeTemp = 1;
    const lastTemp = perPage;
    const firstTemp = lastTemp - perPage;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: 0,
      firstDisplay: firstTemp,
      lastDisplay: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  //Set search and display to first item in last page range
  const lastPage = () => {
    const activeTemp = pages - (perPage - 1);
    const lastTemp = activeTemp - 1 + perPage;
    const firstTemp = lastTemp - perPage;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: activeTemp - 1,
      firstDisplay: firstTemp,
      lastDisplay: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  // Set total number of pages to state. Set pageRange to first set of pages.
  useEffect(() => {
    if (!pages) return;
    for (let n = 1; n <= pages; n++) {
      setQuery((prevState) => ({
        ...prevState,
        items: [...prevState.items, n],
      }));
    }
    setQuery((prevState) => ({
      ...prevState,
      pageRange: paginationDisplay(
        prevState.firstDisplay,
        prevState.lastDisplay,
        prevState.items
      ),
      displayPagination: true,
    }));
  }, [pages]);

  return displayPagination ? (
    <div className={className}>
      <Pagination>
        <Pagination.First onClick={firstPage} display={active <= perPage} />
        <Pagination.Prev onClick={back} display={active === 1} />
        {pageRange.map((item) => (
          <Pagination.Item
            key={item}
            active={item === active}
            onClick={() => current(item)}
            display={item === active}
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={next} display={active === pages} />
        <Pagination.Last
          onClick={lastPage}
          display={active >= pages - (perPage - 1)}
        />
      </Pagination>
    </div>
  ) : (
    <div></div>
  );
};
