import React from "react";
import { NewsCard } from "./NewsCard";

export const NewsCardGrid = ({ currentDisplay }) => {
  return (
    <div
      className={
        currentDisplay === "results"
          ? "display-news-grid news-card-grid"
          : "news-card-grid"
      }
    >
      <NewsCard
        title="'Our silence is complicity': Biden and Harris condemn anti-Asian violence during Atlanta visit"
        url="https://www.theguardian.com/us-news/2021/mar/19/atlanta-spa-shootings-biden-harris-visit"
        byline={"Owen Jones"}
        date={"12/10/1994"}
        imageUrl={
          "https://www.nytimes.com/images/2010/10/02/business/subMoney/subMoney-jumbo.jpg"
        }
        currentDisplay={currentDisplay}
      />
      <NewsCard
        title="'Our silence is complicity': Biden and Harris condemn anti-Asian violence during Atlanta visit"
        url="https://www.theguardian.com/us-news/2021/mar/19/atlanta-spa-shootings-biden-harris-visit"
        byline={"Owen Jones"}
        date={"12/10/1994"}
        imageUrl={
          "https://www.nytimes.com/images/2010/10/02/business/subMoney/subMoney-jumbo.jpg"
        }
        currentDisplay={currentDisplay}
      />
      <NewsCard
        title="'Our silence is complicity': Biden and Harris condemn anti-Asian violence during Atlanta visit"
        url="https://www.theguardian.com/us-news/2021/mar/19/atlanta-spa-shootings-biden-harris-visit"
        byline={"Owen Jones"}
        date={"12/10/1994"}
        imageUrl={
          "https://www.nytimes.com/images/2010/10/02/business/subMoney/subMoney-jumbo.jpg"
        }
        currentDisplay={currentDisplay}
      />
      <NewsCard
        title="'Our silence is complicity': Biden and Harris condemn anti-Asian violence during Atlanta visit"
        url="https://www.theguardian.com/us-news/2021/mar/19/atlanta-spa-shootings-biden-harris-visit"
        byline={"Owen Jones"}
        date={"12/10/1994"}
        imageUrl={
          "https://www.nytimes.com/images/2010/10/02/business/subMoney/subMoney-jumbo.jpg"
        }
        currentDisplay={currentDisplay}
      />
      <NewsCard
        title="'Our silence is complicity': Biden and Harris condemn anti-Asian violence during Atlanta visit"
        url="https://www.theguardian.com/us-news/2021/mar/19/atlanta-spa-shootings-biden-harris-visit"
        byline={"Owen Jones"}
        date={"12/10/1994"}
        imageUrl={
          "https://www.nytimes.com/images/2010/10/02/business/subMoney/subMoney-jumbo.jpg"
        }
        currentDisplay={currentDisplay}
      />
      <NewsCard
        title="'Our silence is complicity': Biden and Harris condemn anti-Asian violence during Atlanta visit"
        url="https://www.theguardian.com/us-news/2021/mar/19/atlanta-spa-shootings-biden-harris-visit"
        byline={"Owen Jones"}
        date={"12/10/1994"}
        imageUrl={
          "https://www.nytimes.com/images/2010/10/02/business/subMoney/subMoney-jumbo.jpg"
        }
        currentDisplay={currentDisplay}
      />
    </div>
  );
};
