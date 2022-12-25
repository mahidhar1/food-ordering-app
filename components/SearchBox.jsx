import React, { useState } from "react";
import css from "../styles/Search.module.css";
import { VscSearch } from "react-icons/vsc";

const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
      className={css["container"]}
    >
      <div className={css["search-box-input"]}>
        <VscSearch size={25} />
        <input
          type="text"
          placeholder="Search by city"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBox;
