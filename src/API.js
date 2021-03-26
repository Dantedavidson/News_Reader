import axios from "axios";
import uuid from "react-uuid";

export const getTopStories = async () => {
  const res = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=k0L0bB63edeW9FGzx7K4pSaVRQDheNx7"
  );
  const data = res.data.results;
  console.log(data);
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
