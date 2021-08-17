import React from "react";

const bounceInfo = React.createContext({
  search: "",
  title: "",
  url: "",
  error: "",

  handleInputChange: function (event) {
    bounceInfo.search(event.target.value);
  },
  handleFormSubmit: function (event) {
    event.preventDefault();
  },
});

export default bounceInfo;
