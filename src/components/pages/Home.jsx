import React, { useEffect, useState } from "react";

import { getTopStories } from "../../API";
import { createCard } from "../utilities";

//Components
import { Nav } from "../Nav";
import { SearchContainer } from "../SearchContainer";

import { Footer } from "../Footer";
import { CarouselContainer } from "../CarouselContainer";

export const Home = ({ savedStories, setSavedStories }) => {
  const [topStories, setTopStories] = useState([]);
  const [loadingTopStories, setLoadingTopStories] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getTopStories();
      const cards = createCard(data);
      setTopStories([...cards]);
      setLoadingTopStories(false);
    }
    getData();
  }, []);
  return (
    <React.Fragment>
      <Nav current={"home"} />
      <CarouselContainer
        topStories={topStories}
        loading={loadingTopStories}
        savedStories={savedStories}
        setSavedStories={setSavedStories}
      />
      <SearchContainer
        savedStories={savedStories}
        setSavedStories={setSavedStories}
      />
      <Footer />
    </React.Fragment>
  );
};
