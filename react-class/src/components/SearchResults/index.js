import React, { useContext } from "react";
import "./style.css";
import BounceContext from "../../utils/BounceContext";

function SearchResults() {
  const { title, url } = useContext(BounceContext);

  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{title}</h2>
        <a href={url}>{url}</a>
      </li>
    </ul>
  );
}

export default SearchResults;
