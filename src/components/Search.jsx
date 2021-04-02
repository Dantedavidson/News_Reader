import React from "react";

export const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <div className="filter">
      <div className="input">
        <label>Filter Stories</label>
        <input id="term" value={search.term} onChange={handleChange}></input>
      </div>
      <div className="input">
        <label>Filter Tags</label>
        <select id="tags" value={search.tags} onChange={handleChange}>
          <option Value="All">All</option>
          <option Value="World">World</option>
          <option Value="Environment">Environment</option>
        </select>
      </div>
    </div>
  );
};
