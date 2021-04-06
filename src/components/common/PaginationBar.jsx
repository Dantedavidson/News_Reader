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
    if (display.active >= display.pages - (perPage - 1)) {
      console.log("display last ten");
      setDisplay((prevState) => ({
        ...prevState,
        active: prevState.active + 1,
      }));
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
    if (display.active > display.pages - (perPage - 1)) {
      console.log(display.active, display.pages - (perPage - 1));
      setDisplay((prevState) => ({
        ...prevState,
        active: prevState.active - 1,
      }));
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
    if (display.active === display.pages - perPage) return;
    const active = display.pages - (perPage - 1);

    const last = active - 1 + perPage;
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
    for (let n = 1; n <= display.pages; n++) {
      setDisplay((prevState) => ({
        ...prevState,
        items: [...prevState.items, n],
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
  useEffect(() => {
    console.log(display.first, display.last, display.active);
  }, [display]);

  return (
    <div>
      {" "}
      <Pagination>
        <Pagination.First
          onClick={first}
          className={display.active <= perPage ? "display-none" : ""}
        />
        <Pagination.Prev
          onClick={back}
          className={display.active === 1 ? "display-none" : ""}
        />
        {display.display.map((item) => (
          <Pagination.Item
            key={item}
            active={item === display.active}
            className={
              item === display.active ? "page-item active" : "page-item"
            }
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={next}
          className={display.active === display.pages ? "display-none" : ""}
        />
        <Pagination.Last
          onClick={last}
          className={
            display.active >= display.pages - (perPage - 1)
              ? "display-none"
              : ""
          }
        />
      </Pagination>
    </div>
  );
};
