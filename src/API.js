import config from "./config.json";
import axios from "axios";
export const API_KEY = process.env.REACT_APP_NYT_KEY;

//Get from top stories end point
export const getTopStories = async () => {
  const res = await axios.get(`${config.NYT_TOP_STORIES}api-key=${API_KEY}`);
  const data = res.data.results;
  return data;
};

//Get from article end point
export const getSearchStories = async (q) => {
  const res = await axios.get(q);
  return res;
};
