import React from "react";
import { useTodos } from "../../hooks/server/useTodos";
import Loading from "../Loading/Loading";

const TodoList = () => {
  const { todos, isValidating } = useTodos();
  if (!todos || isValidating) return <Loading />;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
