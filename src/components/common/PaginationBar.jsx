import React, { useState, useEffect } from "react";

//Libraries
import Pagination from "react-bootstrap/Pagination";

//Utilities
import { paginationDisplay } from "../utilities";

export const PaginationBar = ({ query, setQuery }) => {
  console.log(query);
  const { pages, perPage, items, active, last, first, pageRange } = query;

  const current = (number) => {
    if (number > pages - perPage) {
      let activeTemp = number;
      let firstTemp = pages - perPage;
      let lastTemp = pages;
      setQuery((prevState) => ({
        ...prevState,
        active: activeTemp,
        currentPage: activeTemp - 1,
        first: firstTemp,
        last: lastTemp,
        pageRange: paginationDisplay(firstTemp, lastTemp, items),
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
      first: firstTemp,
      last: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  const next = () => {
    if (active >= pages - (perPage - 1)) {
      setQuery((prevState) => ({
        ...prevState,
        active: prevState.active + 1,
        currentPage: prevState.currentPage + 1,
      }));
      return;
    }
    const activeTemp = active + 1;
    const lastTemp = last + 1;
    const firstTemp = last - (perPage - 1);
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: activeTemp - 1,
      first: firstTemp,
      last: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  const back = () => {
    if (active > pages - (perPage - 1)) {
      setQuery((prevState) => ({
        ...prevState,
        active: prevState.active - 1,
        currentPage: prevState.currentPage - 1,
      }));
      return;
    }
    const activeTemp = active - 1;
    const lastTemp = last - 1;
    const firstTemp = last - (perPage + 1);
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: activeTemp - 1,
      first: firstTemp,
      last: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  const firstPage = () => {
    const activeTemp = 1;
    const lastTemp = perPage;
    const firstTemp = lastTemp - perPage;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: 0,
      first: firstTemp,
      last: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  const lastPage = () => {
    const activeTemp = pages - (perPage - 1);
    const lastTemp = activeTemp - 1 + perPage;
    const firstTemp = lastTemp - perPage;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      currentPage: activeTemp - 1,
      first: firstTemp,
      last: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };

  useEffect(() => {
    for (let n = 1; n <= pages; n++) {
      setQuery((prevState) => ({
        ...prevState,
        items: [...prevState.items, n],
      }));
    }
    setQuery((prevState) => ({
      ...prevState,
      pageRange: paginationDisplay(
        prevState.first,
        prevState.last,
        prevState.items
      ),
    }));
  }, []);

  return (
    <div>
      {" "}
      <Pagination>
        <Pagination.First
          onClick={firstPage}
          className={active <= perPage ? "display-none" : ""}
        />
        <Pagination.Prev
          onClick={back}
          className={active === 1 ? "display-none" : ""}
        />
        {pageRange.map((item) => (
          <Pagination.Item
            key={item}
            active={item === active}
            onClick={() => current(item)}
            className={item === active ? "page-item active" : "page-item"}
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={next}
          className={active === pages ? "display-none" : ""}
        />
        <Pagination.Last
          onClick={lastPage}
          className={active >= pages - (perPage - 1) ? "display-none" : ""}
        />
      </Pagination>
    </div>
  );
};
