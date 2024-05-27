import React from "react";
import "./Search.css";

const Search = ({ setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search for a beer..."
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default Search;
