import React from "react";
import uuid from "react-uuid";

//Ui Components
import { SearchBar } from "./ui";
import { Input, Select } from "../common/ui/form";

export const Search = ({ search, setSearch, tags }) => {
  // takes search input and filters diaplay.
  const handleChange = (e) => {
    setSearch((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <SearchBar>
      <Input label="Filter Stories" id="term" handler={handleChange}></Input>
      <Select
        label="Filter Tags"
        id="tags"
        options={["All", "NYT", ...tags]}
        handler={handleChange}
        width={40}
      ></Select>
    </SearchBar>
  );
};
