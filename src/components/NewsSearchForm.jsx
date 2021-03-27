import React from "react";
import { ShowResultsBtn } from "./ShowResultsBtn";
import { useForm } from "react-hook-form";
import axios from "axios";
import uuid from "react-uuid";

export const NewsSearchForm = ({ currentDisplay, setCurrentDisplay }) => {
  const { register, handleSubmit } = useForm();
  const sections = [
    "All",
    "Adventure Sports",
    "Arts & Leisure",
    "Arts",
    "Automobiles",
    "Blogs",
    "Books",
    "Booming",
    "Business Day",
    "Business",
    "Cars",
    "Circuits",
    "Classifieds",
    "Connecticut",
    "Crosswords & Games",
    "Culture",
    "DealBook",
    "Dining",
    "Editorial",
    "Education",
    "Energy",
    "Entrepreneurs",
    "Environment",
    "Escapes",
    "Fashion & Style",
    "Fashion",
    "Favorites",
    "Financial",
    "Flight",
    "Food",
    "Foreign",
    "Generations",
    "Giving",
    "Global Home",
    "Health & Fitness",
    "Health",
    "Home & Garden",
    "Home",
    "Jobs",
    "Key",
    "Letters",
    "Long Island",
    "Magazine",
    "Market Place",
    "Media",
    "Men's Health",
    "Metro",
    "Metropolitan",
    "Movies",
    "Museums",
    "National",
    "Nesting",
    "Obits",
    "Obituaries",
    "Obituary",
    "OpEd",
    "Opinion",
    "Outlook",
    "Personal Investing",
    "Personal Tech",
    "Play",
    "Politics",
    "Regionals",
    "Retail",
    "Retirement",
    "Science",
    "Small Business",
    "Society",
    "Sports",
    "Style",
    "Sunday Business",
    "Sunday Review",
    "Sunday Styles",
    "T Magazine",
    "T Style",
    "Technology",
    "Teens",
    "Television",
    "The Arts",
    "The Business of Green",
    "The City Desk",
    "The City",
    "The Marathon",
    "The Millennium",
    "The Natural World",
    "The Upshot",
    "The Weekend",
    "The Year in Pictures",
    "Theater",
    "Then & Now",
    "Thursday Styles",
    "Times Topics",
    "Travel",
    "U.S.",
    "Universal",
    "Upshot",
    "UrbanEye",
    "Vacation",
    "Washington",
    "Wealth",
    "Weather",
    "Week in Review",
    "Week",
    "Weekend",
    "Westchester",
    "Wireless Living",
    "Women's Health",
    "Working",
    "Workplace",
    "World",
    "Your Money",
  ];

  const getSearchStories = async (d) => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${d.term}&begin_date=${d.startDate}&end_date=${d.endDate}&api-key=k0L0bB63edeW9FGzx7K4pSaVRQDheNx7`
    );
    const data = res.data.response.docs;
    console.log(data);
    const cards = data.map((item) => {
      let card = {
        story: item,
        id: uuid(),
        like: false,
      };
      return card;
    });
  };
  const onSubmit = (data) => {
    console.log(data.term, data.startDate, data.endDate);
    getSearchStories(data);
    setCurrentDisplay("results");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="search-button-container">
        <ShowResultsBtn
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        ></ShowResultsBtn>
      </div>
      <div
        className={
          currentDisplay === "form"
            ? "display form-input-container"
            : "form-input-container"
        }
      >
        <div>
          <div className="input">
            <label for="news-search">Search Term</label>
            <input id="news-search" name="term" ref={register}></input>
          </div>
        </div>
        <div>
          <div className="input">
            <label for="news-search-start-date">Start Date</label>
            <input
              type="text"
              id="news-search-start-date"
              name="startDate"
              ref={register}
            />
          </div>
          <div className="input">
            <label for="news-search-end-date">End Date</label>
            <input
              type="text"
              id="news-search-end-date"
              name="endDate"
              ref={register}
            />
          </div>
        </div>
        <div>
          <div className="input">
            <label for="news-search-sections">Section</label>
            <select id="news-search-sections" name="section" ref={register}>
              {sections.map((section) => {
                return (
                  <option value={section} key={uuid()}>
                    {section}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};
