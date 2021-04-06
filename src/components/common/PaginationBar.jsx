import React, { useState, useEffect } from "react";

//Libraries
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

//Utilities
import { paginationDisplay } from "../utilities";

export const PaginationBar = ({ currentPage, total, perPage }) => {
  const [display, setDisplay] = useState({
    active: currentPage,
    pages: Math.ceil(total / perPage),
    items: [],
    first: 0,
    last: perPage,
    display: [],
  });

  const next = () => {
    if (display.active === display.pages) {
      return;
    }
    const active = display.active + 1;
    const last = display.last + 1;
    const first = last - perPage;
    setDisplay((prevState) => ({
      ...prevState,
      active: active,
      first: first,
      last: last,
      display: paginationDisplay(first, last, display.items),
    }));
  };
  const back = () => {
    if (display.active === 1) {
      return;
    }
    const active = display.active - 1;
    const last = display.last - 1;
    const first = last - perPage;
    setDisplay((prevState) => ({
      ...prevState,
      active: active,
      first: first,
      last: last,
      display: paginationDisplay(first, last, display.items),
    }));
  };
  const first = () => {
    const active = 1;
    const last = perPage;
    const first = last - perPage;
    setDisplay((prevState) => ({
      ...prevState,
      active: active,
      first: first,
      last: last,
      display: paginationDisplay(first, last, display.items),
    }));
  };

  const last = () => {
    const active = display.pages - perPage;
    const last = active + perPage;
    const first = last - perPage;
    setDisplay((prevState) => ({
      ...prevState,
      active: active,
      first: first,
      last: last,
      display: paginationDisplay(first, last, display.items),
    }));
  };

  useEffect(() => {
    for (let n = 1; n < display.pages; n++) {
      setDisplay((prevState) => ({
        ...prevState,
        items: [
          ...prevState.items,
          <Pagination.Item key={n} active={n === display.active}>
            {n}
          </Pagination.Item>,
        ],
      }));
    }
    setDisplay((prevState) => ({
      ...prevState,
      display: paginationDisplay(
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
        <Pagination.First onClick={first} />
        <Pagination.Prev onClick={back} />
        {display.display.map((item) => item)}
        <Pagination.Next onClick={next} />
        <Pagination.Last onClick={last} />
      </Pagination>
    </div>
  );
};
