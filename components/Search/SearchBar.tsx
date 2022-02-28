import React from "react";
import { useRecoilState } from "recoil";
import { searchInput } from "../../atom/searchState";

const SearchBar = () => {
  const [_, setInput] = useRecoilState(searchInput);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
