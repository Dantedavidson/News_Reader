import React from "react";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";

//API
import { getSearchStories } from "../API";

//Utilities
import { createQuery } from "./utilities";
import { createCard } from "./utilities";
//components
import { ShowResultsBtn } from "./ShowResultsBtn";

export const NewsSearchForm = ({
  currentDisplay,
  setCurrentDisplay,
  setSearchResults,
}) => {
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

  const onSubmit = async (data) => {
    let query = createQuery(data);
    let stories = await getSearchStories(query);
    let results = createCard(stories);
    setSearchResults(results);
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
