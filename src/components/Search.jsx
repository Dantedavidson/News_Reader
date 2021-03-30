import React from "react";

export const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className="latest-container">
      <input value={search} onChange={handleChange}></input>
    </div>
  );
};
