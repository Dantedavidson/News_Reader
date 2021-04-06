import React, { useState, useEffect } from "react";

//Libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import uuid from "react-uuid";

//API
import { getSearchStories } from "../API";

//Utilities
import { createCard, createQuery, formatQueryDate } from "./utilities";

//components
import { Button } from "./common/Button";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//schema
import { searchFormSchema } from "./schema";

export const NewsSearchForm = ({
  currentDisplay,
  setCurrentDisplay,
  setQuery,
  initialQuery,
  savedStories,
}) => {
  const [error, setError] = useState(false);
  const { register, handleSubmit, reset, errors, clearErrors } = useForm({
    resolver: yupResolver(searchFormSchema),
    reValidateMode: "onChange",
  });
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
    try {
      setQuery(initialQuery);

      data.startDate = formatQueryDate(data.startDate);
      data.endDate = formatQueryDate(data.endDate);

      let query = createQuery(data, initialQuery.currentPage);
      let res = await getSearchStories(query);
      let total =
        res.headers["content-length"] > 1000
          ? 1000
          : res.headers["content-length"];
      let results = createCard(res.data.response.docs, savedStories);
      clearErrors();
      reset();
      setQuery({
        total: total,
        results: results,
        currentPage: 1,
      });
      setCurrentDisplay("results");
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);
  return (
    <div
      className={currentDisplay === "modal" ? "modal-bg bg-active" : "modal-bg"}
    >
      <div
        className={
          currentDisplay === "modal"
            ? "modal-custom"
            : "modal-custom modal-active"
        }
      >
        <span
          className="modal-close"
          onClick={() => {
            clearErrors();
            reset();
            setCurrentDisplay("start");
          }}
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </span>
        <h3>Search The New York Times</h3>
        <form>
          <div>
            <div className={errors.term ? "input error" : "input"}>
              <label for="news-search">Search Term</label>
              <input id="news-search" name="term" ref={register}></input>
            </div>
          </div>
          <p className="below error">{errors.term?.message}</p>

          <div className={errors.startDate ? "input error" : "input"}>
            <label for="news-search-start-date">Start Date</label>
            <input
              type="text"
              id="news-search-start-date"
              name="startDate"
              ref={register}
            />
          </div>
          <p className="below">DD/MM/YYYY</p>
          <p className="below error">
            {errors.startDate && "Please enter a valid date"}
          </p>
          <div className={errors.endDate ? "input error" : "input"}>
            <label for="news-search-end-date">End Date</label>
            <input
              type="text"
              id="news-search-end-date"
              name="endDate"
              ref={register}
            />
          </div>
          <p className="below">DD/MM/YYYY</p>
          <p className="below error">
            {errors.endDate && "Please enter a valid date"}
          </p>

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
          <Button handler={handleSubmit(onSubmit)} text="Submit"></Button>
          <p className="below-btn error">{error && `${error}`}</p>
        </form>
      </div>
    </div>
  );
};
