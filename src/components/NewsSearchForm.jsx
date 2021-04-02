import React, { useState, useEffect } from "react";

//Libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import uuid from "react-uuid";

//API
import { getSearchStories } from "../API";

//Utilities
import { createQuery } from "./utilities";
import { createCard } from "./utilities";
import { dateRegex } from "./regex";

//components
import { Button } from "./common/Button";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const schema = yup.object().shape({
  term: yup.string().max(32).required(),
  startDate: yup.string().matches(dateRegex),
  endDate: yup.string().matches(dateRegex),
  section: "",
});

export const NewsSearchForm = ({
  currentDisplay,
  setCurrentDisplay,
  setSearchResults,
  savedStories,
}) => {
  const [error, setError] = useState(false);
  const { register, handleSubmit, reset, errors, clearErrors } = useForm({
    resolver: yupResolver(schema),
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
    console.log("i submited");
    try {
      console.log(data);
      let query = createQuery(data);
      let stories = await getSearchStories(query);
      let results = createCard(stories, savedStories);
      setSearchResults(results);
      setCurrentDisplay("results");
      clearErrors();
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    console.log(errors);
  }, [currentDisplay]);
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
            reset();
            clearErrors();
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
              <input
                id="news-search"
                name="term"
                ref={register}
                onChange={() => console.log(errors)}
              ></input>
            </div>
          </div>
          <p className="below error">{errors.term?.message}</p>

          <div className="input">
            <label for="news-search-start-date">Start Date</label>
            <input
              type="text"
              id="news-search-start-date"
              name="startDate"
              ref={register}
              onChange={() => console.log(errors)}
            />
          </div>
          <p className="below">DD/MM/YYYY</p>
          <p className="below error">
            {errors.startDate && "Please enter a valid date"}
          </p>
          <div className="input">
            <label for="news-search-end-date">End Date</label>
            <input
              type="text"
              id="news-search-end-date"
              name="endDate"
              ref={register}
              onChange={() => console.log(errors)}
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
