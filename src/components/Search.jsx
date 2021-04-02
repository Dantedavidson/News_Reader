import React from "react";

export const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="filter">
      <div className="input">
        <label>Filter Stories</label>
        <input value={search} onChange={handleChange}></input>
      </div>
      <div className="input">
        <label>Filter Tags</label>
        <select id="tags">
          <option Value="All">All</option>
        </select>
      </div>
    </div>
  );
};
