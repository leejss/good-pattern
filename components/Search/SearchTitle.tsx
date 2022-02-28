import React from "react";
import styles from "./Search.module.css";
import { useRecoilValue } from "recoil";
import { searchInput } from "../../atom/searchState";

const SearchTitle = () => {
  const input = useRecoilValue(searchInput);
  if (!input) return null;
  return <div className={styles.SearchTitle}>{input}</div>;
};

export default SearchTitle;
