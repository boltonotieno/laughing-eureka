import React from "react";
import SearchForm from "../../components/searchForm";
import JokesCard from "../../components/card";

const Search = props => {
  const { loading, jokes, loadSearch } = props;

  return (
    <div>
      <SearchForm onSubmit={loadSearch} />
      <JokesCard loading={loading} jokes={jokes} />
    </div>
  );
};

export default Search;
