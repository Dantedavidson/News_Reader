import uuid from "react-uuid";
import config from "../config.json";

import { API_KEY } from "../API";
import { DateTime } from "luxon";

// Takes a date from the api and returns en-gb format
const formatApiDate = (date) => {
  let [y, m, d] = date
    .match(/[0-9-]{10}/g)
    .toString()
    .split("-");
  return `${d}/${m}/${y}`;
};

//Returns current date in en-gb format
const currentDate = () => {
  let date = DateTime.now().setLocale("en-gb").toLocaleString();
  return date;
};

//Takes data from differnt API end points and returns standadised object
export const cleanData = (data) => {
  const story = {
    title: "",
    lead: "",
    date: "Published ",
    byline: "",
    url: "",
    imgUrl: "",
  };

  if (data.title) {
    story.title = data.title;
  } else if (data.headline.main) {
    story.title = data.headline.main;
  } else {
    story.title = null;
  }

  if (data.abstract) {
    story.lead = data.abstract;
  } else {
    story.lead = null;
  }

  if (data.published_date) {
    story.date += formatApiDate(data.published_date);
  } else if (data.pub_date) {
    story.date += formatApiDate(data.pub_date);
  } else {
    story.date += currentDate();
  }

  if (data.byline && typeof data.byline === "string") {
    story.byline = data.byline;
  } else if (data.byline.original && typeof data.byline.original === "string") {
    story.byline = data.byline.original;
  } else {
    story.byline = "The New York Times";
  }

  if (data.url) {
    story.url = data.url;
  } else if (data.web_url) {
    story.url = data.web_url;
  } else {
    story.url = `${config.NYT_URL}search?query=${story.title}`;
  }

  if (data.multimedia && data.multimedia.length > 0) {
    if (data.multimedia[0].url.startsWith("https")) {
      story.imgUrl = data.multimedia[0].url;
    } else if (data.multimedia[0].url.startsWith("image")) {
      story.imgUrl = `${config.NYT_URL}${data.multimedia[0].url}`;
    } else {
      story.imgUrl = null;
    }
  } else {
    story.imgUrl = null;
  }

  return story;
};

//Compares current object against array of saved objects. Sets like status if object is contained in array.
export const likeStatus = (saved, current) => {
  let like = saved.some((item) => {
    return item.story.title === current.story.title && item.like === true;
  });
  return like;
};

//Creates a card object from standardised data. Also takes saved array to set like status.
export const createCard = (data, saved) => {
  const cards = data.map((item) => {
    let card = {
      story: cleanData(item),
      id: uuid(),
      like: false,
      tags: ["NYT"],
    };
    card.like = likeStatus(saved, card);
    return card;
  });
  return cards;
};

//Creates a card object from form data.
export const userCard = (data) => {
  let card = {
    story: {
      title: data.title,
      lead: data.description,
      date: `Published ${currentDate()}`,
      byline: formatAuthors(data.author),
      url: data.url,
      imgUrl: null,
    },
    id: uuid(),
    like: true,
    tags: data.tag,
  };
  card.story.url = data.url
    ? data.url
    : `https://www.nytimes.com/search?query=${card.story.title}`;
  return card;
};

//Takes an item to be saved, an array to be saved to and a setter method
export const saveCard = (object, saveTo, setter) => {
  saveTo.length === 0 ? setter([object]) : setter([...saveTo, object]);
};
//Takes an item to be deleted, an array to be saved to and a setter method
export const deleteCard = (object, saveTo, setter) => {
  const filtered = saveTo.filter((item) => {
    return item.story.title !== object.story.title;
  });
  filtered.length > 0 ? setter([...filtered]) : setter([]);
};

//Returns true if string is null or empty
export function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

// Takes an array of names and returns a formated string
export const formatAuthors = (array) => {
  let string = array.reduce((accumulator, value, index) => {
    if (array.length === 1) {
      return `${accumulator} ${value}.`;
    }
    if (index === array.length - 1) {
      return `${accumulator} and ${value}.`;
    }
    if (index === array.length - 2) {
      return `${accumulator} ${value}`;
    } else {
      return `${accumulator} ${value},`;
    }
  }, "By");
  return string;
};

//Takes an array to be saved and a string the location in local storage
export const setLocalStorage = (array, location) => {
  localStorage.setItem(location, JSON.stringify(array));
};

//Takes a setter method for state and a string for local storage location. Create local storage location or save it to state.
export const getLocalStorage = (setter, location) => {
  if (localStorage.getItem(location) === null) {
    localStorage.getItem(location, JSON.stringify([]));
  } else {
    let data = JSON.parse(localStorage.getItem(location));
    setter(data);
  }
};

//Takes form data and returns a formated query string.
export const createQuery = (data) => {
  const arr = (({ term, startDate, endDate, section }) => [
    term,
    startDate,
    endDate,
    section,
  ])(data);

  let query = "";
  query = arr.reduce((start, value, index) => {
    console.log(query);
    if (value === null || value === "All") return `${start}`;
    switch (index) {
      case 0:
        return `${start}q=${value}`;
      case 1:
        return `${start}&begin_date=${value}`;
      case 2:
        return `${start}&end_date=${value}`;
      case 3:
        return `${start}&fq=news_desk:(${value})`;
      default:
        return `${start}`;
    }
  }, config.NYT_ARTICLE_SEARCH);
  query = `${query}&api-key=${API_KEY}`;

  return query;
};
//Takes date from form and returns valid string for query
export const formatQueryDate = (date) => {
  if (!date) {
    return null;
  }
  const [d, m, y] = date.split("/");
  const queryDate = `${y}${m}${d}`;
  return queryDate;
};
//Takes the first display page, the last display page, and all the total pages. Returns array of pages to display.
export const paginationDisplay = (first, last, array) => {
  if (first === null || last === null) {
    return null;
  }
  return array.slice(first, last);
};
//Takes the total number results and results per pages. Returnes total number of pages.
export const getPages = (total, perPage) => Math.ceil(total / perPage);

//set scroll to top of page
export const scrollTop = () => {
  console.log("scroll to top");
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export const shift = (e, setter, current) => {
  if (e.currentTarget.id === "left") {
    setter(current - 1);
  } else {
    setter(current + 1);
  }
};
