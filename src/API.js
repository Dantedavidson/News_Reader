import axios from "axios";
export const API_KEY = process.env.REACT_APP_NYT_KEY;

export const getTopStories = async () => {
  const res = await axios.get(
    ` https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`
  );
  const data = res.data.results;
  return data;
};

export const getSearchStories = async (q) => {
  const res = await axios.get(q);
  const data = res.data.response.docs;
  return data;
};
