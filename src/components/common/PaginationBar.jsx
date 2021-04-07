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
      let active = number;
      let first = pages - perPage;
      let last = pages;
      setQuery((prevState) => ({
        ...prevState,
        active: active,
        first: first,
        last: last,
        pageRange: paginationDisplay(first, last, items),
      }));
      return;
    }
    let active = number;
    let first = number - 1;
    let last = number + perPage - 1;
    setQuery((prevState) => ({
      ...prevState,
      active: active,
      first: first,
      last: last,
      pageRange: paginationDisplay(first, last, items),
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
    const firstTemp = last - perPage;
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
      console.log(active, pages - (perPage - 1));
      setQuery((prevState) => ({
        ...prevState,
        active: prevState.active - 1,
      }));
      return;
    }
    const activeTemp = active - 1;
    const lastTemp = last - 1;
    const firstTemp = last - perPage;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      first: firstTemp,
      last: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  const firstPage = () => {
    const activeTemp = 1;
    const lastTemp = perPage;
    const firstTemp = last - perPage;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
      first: firstTemp,
      last: lastTemp,
      pageRange: paginationDisplay(firstTemp, lastTemp, items),
    }));
  };
  const lastPage = () => {
    if (active === pages - perPage) return;

    const activeTemp = pages - (perPage - 1);
    const lastTemp = active - 1 + perPage;
    const firstTemp = last - perPage;
    setQuery((prevState) => ({
      ...prevState,
      active: activeTemp,
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
