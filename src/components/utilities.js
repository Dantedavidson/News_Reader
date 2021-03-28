import uuid from "react-uuid";
import { API_KEY } from "../API";

export const createCard = (data) => {
  const cards = data.map((item) => {
    let card = {
      story: item,
      id: uuid(),
      like: false,
    };
    return card;
  });
  console.log(cards);
  return cards;
};

export const cleanCard = (card) => {
  let { story } = card;

  // set author
  let byline = "";
  if (story.byline.original === null) {
    byline = "The New York Times";
  } else if (story.byline.original) {
    byline = story.byline.original;
  } else {
    byline = story.byline;
  }

  // set image
  let img = null;
  if (story.multimedia[0]) {
    if (story.multimedia[0].url.includes("https://")) {
      img = story.multimedia[0].url;
    } else if (story.multimedia[0].url.includes("images/")) {
      img = `https://www.nytimes.com/${story.multimedia[0].url}`;
    }
  }

  const display = {
    title: story.title ? story.title : story.headline.main,
    byline: byline,
    date: story.published_date ? story.published_date : story.pub_date,
    imgUrl: img,
    paragraph: story.abstract ? story.abstract : story.lead_paragraph,
  };
  console.log(display);
  return display;
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
