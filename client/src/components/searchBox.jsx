import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        name="query"
        className="form-control my-3"
        palceholder="Search..."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
      <i className="material-icons">search</i>
      <div className="search-results" />
    </div>
  );
};

export default SearchBox;
