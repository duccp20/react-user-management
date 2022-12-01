import React from "react";
import Input from "../components/Input";

const Search = ({ searchInput, onChange, name }) => {
  return (
    <Input
      type={"text"}
      placeholder={"Search..."}
      name={"name"}
      value={searchInput}
      onChange={onChange}
    ></Input>
  );
};

export default Search;
