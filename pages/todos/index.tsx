import Link from "next/link";
import React from "react";
import { RecoilRoot } from "recoil";
import { SearchTitle } from "../../components";
import Search from "../../components/Search/SearchBar";
import TodoList from "../../components/TodoList/TodoList";

const TodosPage = () => {
  return (
    <RecoilRoot>
      <div>
        <Search />
        <TodoList />
        <SearchTitle />
      </div>
    </RecoilRoot>
  );
};

export default TodosPage;
