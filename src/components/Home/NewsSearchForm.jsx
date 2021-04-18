//Form modal. Handles user input and validation. Updates home query state.

import React from "react";

//Libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import uuid from "react-uuid";

//Utilities
import { createQuery, formatQueryDate } from "../Utility/utilities";

//Ui Components
import { Button } from "../common/ui/ui";
import { Modal } from "../common/ui/modal";
import { Input, Select, ModalForm } from "../common/ui/form";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//schema
import { searchFormSchema } from "../Utility/schema";

export const NewsSearchForm = ({
  currentDisplay,
  setCurrentDisplay,
  setQuery,
  initialQuery,
  className,
}) => {
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

  const onSubmit = (data) => {
    console.log(data);
    //Reset to default
    setQuery(initialQuery);

    //format dates for query
    data.startDate = formatQueryDate(data.startDate);
    data.endDate = formatQueryDate(data.endDate);

    // create query and store in home state
    let query = createQuery(data);
    setQuery((prevState) => ({
      ...prevState,
      queryString: query,
      currentPage: 0,
    }));

    //Reset form and close modal
    clearErrors();
    reset();
    setCurrentDisplay("results");
  };

  return (
    <Modal>
      <span
        onClick={() => {
          clearErrors();
          reset();
          setCurrentDisplay("start");
        }}
      >
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </span>
      <h3>Search The New York Times</h3>
      <ModalForm>
        <Input
          error={errors.term}
          id="term"
          label="Search Term"
          register={register}
          type="text"
          name="term"
          width={76}
        ></Input>
        <Input
          error={errors.startDate}
          id="startDate"
          label="Start Date"
          register={register}
          type="text"
          name="startDate"
          width={76}
        >
          <p className="info">DD/MM/YYYY</p>
        </Input>
        <Input
          error={errors.endDate}
          id="endDate"
          label="End Date"
          register={register}
          type="text"
          name="endDate"
          width={70}
        >
          <p className="info">DD/MM/YYYY</p>
        </Input>
        <Select
          options={sections}
          id="section"
          label="Section"
          register={register}
        ></Select>
        <Button handler={handleSubmit(onSubmit)} text="Submit"></Button>
      </ModalForm>
    </Modal>
  );
};
