import React from "react";
import uuid from "react-uuid";

export const Search = ({ search, setSearch, tags }) => {
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
          <option value="All">All</option>
          <option value="NYT">NYT</option>
          {tags.map((tag) => (
            <option value={tag} key={uuid()}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
