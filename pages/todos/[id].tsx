import { useRouter } from "next/router";
import React from "react";
import { useTodoById } from "../../hooks/server/useTodos";

const TodoDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // const { todo } = useTodoById(id);
  return <div></div>;
};

export default TodoDetailPage;
