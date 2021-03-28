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
  return cards;
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
  console.log(query);
};
