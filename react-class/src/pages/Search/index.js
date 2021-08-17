import React, { useState, useEffect } from "react";
import BounceContext from "../../utils/BounceContext";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";

function Search() {
  const [bounceState, setBounceState] = useState({
    search: "",
    title: "",
    url: "",
    error: "",
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!useState.search) {
      return;
    }

    API.searchTerms(useState.search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        useState.title(res.data[1][0]);

        useState.url(res.data[3][0]);
      })
      .catch((err) => useState.error(err));
  }, [useState.search]);

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert
          type="danger"
          style={{ opacity: useState.error ? 1 : 0, marginBottom: 10 }}
        >
          {useState.error}
        </Alert>
        <BounceContext.Provider value={bounceState}>
          <SearchForm />
          <SearchResults />
        </BounceContext.Provider>
      </Container>
    </div>
  );
}

export default Search;
