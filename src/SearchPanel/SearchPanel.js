import React from "react";
import "./SearchPanel.css";
import searchLogo from "../assets/zoom.png";

const SearchPanel = ({ setTerm }) => {
  return (
    <div className="searchPanel">
      <img className="icon-img" src={searchLogo} alt="search" />
      <input
        type="text"
        className="search"
        placeholder={"Начните поиск"}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchPanel;
