import React from "react";
import "./search.css";

const SearchBar = () => {
  return (
    <div class="input-icons">
      <i class="fa fa-search icon"></i>
      <input class="input-field" type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
