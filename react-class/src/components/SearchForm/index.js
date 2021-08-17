import React, { useContext } from "react";
import "./style.css";
import BounceContext from "../../utils/BounceContext";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {
  const { search, handleInputChange } = useContext(BounceContext);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Term:</label>
        <input
          value={search}
          onChange={handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;
