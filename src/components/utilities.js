import uuid from "react-uuid";
import { API_KEY } from "../API";

export const cleanData = (data) => {
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
export const likeStatus = (saved, current) => {
  let like = saved.some((item) => {
    return item.story.title === current.story.title && item.like === true;
  });
  return like;
};
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

export const userCard = (data) => {
  let card = {
    story: {
      title: data.title,
      lead: data.description,
      date: "01/04/2021", //set to current date and format
      byline: formatAuthors(data.author),
      url: data.url,
      imgUrl: null,
    },
    id: uuid(),
    like: true,
    tags: data.tag,
  };
  return card;
};

export const saveCard = (object, saveTo, setter) => {
  saveTo.length === 0 ? setter([object]) : setter([...saveTo, object]);
};

export const deleteCard = (object, saveTo, setter) => {
  const filtered = saveTo.filter((item) => {
    return item.story.title !== object.story.title;
  });
  filtered.length > 0 ? setter([...filtered]) : setter([]);
};

export function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

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

export const setLocalStorage = (array, location) => {
  localStorage.setItem(location, JSON.stringify(array));
};

export const getLocalStorage = (setter, location) => {
  if (localStorage.getItem(location) === null) {
    localStorage.getItem(location, JSON.stringify([]));
  } else {
    let data = JSON.parse(localStorage.getItem(location));
    setter(data);
  }
};

export const createQuery = (data) => {
  const arr = (({ term, startDate, endDate, section }) => [
    term,
    startDate,
    endDate,
    section,
  ])(data);

  let query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  query = arr.reduce((start, value, index) => {
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
  }, query);
  query = `${query}&api-key=${API_KEY}`;

  return query;
};
export const formatQueryDate = (date) => {
  if (!date) {
    return null;
  }
  const [d, m, y] = date.split("/");
  const queryDate = `${y}${m}${d}`;
  return queryDate;
};
