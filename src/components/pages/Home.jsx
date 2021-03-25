import React, { useEffect, useState } from "react";

import { getTopStories } from "../../API";

//Components
import { Nav } from "../Nav";
import { SearchContainer } from "../SearchContainer";

import { Footer } from "../Footer";
import { CarouselContainer } from "../CarouselContainer";

export const Home = () => {
  const [topStories, setTopStories] = useState([]);
  const [loadingTopStories, setLoadingTopStories] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getTopStories();
      setTopStories([...data]);
      console.log(data);
      setLoadingTopStories(false);
    }
    getData();
  }, []);
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <CarouselContainer topStories={topStories} loading={loadingTopStories} />
      <SearchContainer />
      <Footer />
    </React.Fragment>
  );
};
