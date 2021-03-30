import uuid from "react-uuid";
import { API_KEY } from "../API";

export const cleanData = (data) => {
  console.log(data);
  const story = {
    title: "",
    lead: "",
    date: "",
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
    story.date = data.published_date; //add date format
  } else if (data.pub_date) {
    story.date = data.pub_date; //add date format
  } else {
    story.date = null; //make current date
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
  } else {
    story.url = "https://www.nytimes.com/";
  }

  if (data.multimedia && data.multimedia.length > 0) {
    if (data.multimedia[0].url.startsWith("https")) {
      story.imgUrl = data.multimedia[0].url;
    } else if (data.multimedia[0].url.startsWith("image")) {
      story.imgUrl = `https://www.nytimes.com/${data.multimedia[0].url}`;
    } else {
      story.imgUrl = null;
    }
  } else {
    story.imgUrl = null;
  }

  return story;
};

export const createCard = (data) => {
  const cards = data.map((item) => {
    let card = {
      story: cleanData(item),
      id: uuid(),
      like: false,
    };
    return card;
  });
  return cards;
};

export const saveCard = (object, saveTo, setter) => {
  saveTo.length === 0 ? setter([object]) : setter([...saveTo, object]);
};

export const deleteCard = (object, saveTo, setter) => {
  const filtered = saveTo.filter((item) => {
    return item.id !== object.id;
  });
  filtered.length > 0 ? setter([...filtered]) : setter([]);
};

export const setLocalStorage = (array) => {
  localStorage.setItem("Stories", JSON.stringify(array));
};

export const getLocalStorage = (setter) => {
  if (localStorage.getItem("Stories") === null) {
    localStorage.getItem("Stories", JSON.stringify([]));
  } else {
    let localStories = JSON.parse(localStorage.getItem("Stories"));
    setter(localStories);
    console.log(localStories);
  }
};

export const createQuery = (data) => {
  let { term, startDate, endDate, section } = data;
  let queryTerms = [
    `q=${term}`,
    `begin_date=${startDate}`,
    `end_date=${endDate}`,
    `fq=news_desk:(${section})`,
  ];
  let query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  query = queryTerms.reduce((start, term, index) => {
    if (index === 3) {
      return term === "fq=news_desk:(All)"
        ? `${start}&api-key=${API_KEY}`
        : `${start}${term}&api-key=${API_KEY}`;
    } else {
      return `${start}&${term}`;
    }
  }, query);
  return query;
};
