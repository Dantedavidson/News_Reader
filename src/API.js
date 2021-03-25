import axios from "axios";

export const getTopStories = async () => {
  const res = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=k0L0bB63edeW9FGzx7K4pSaVRQDheNx7"
  );
  const data = res.data.results;
  return data;
};
