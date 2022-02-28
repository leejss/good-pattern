import useRequest from "../../client/useRequest";
import { ITodo } from "../../types/Todo";

export function useTodos() {
  const { data, error, isValidating } = useRequest<ITodo[]>(
    {
      url: "/todos",
    },
    { revalidateOnFocus: false }
  );
  return {
    todos: data,
    error,
    isValidating,
  };
}

export function useTodoById(id: string) {
  const { data, error, isValidating } = useRequest<ITodo>(
    {
      url: `/todos/${id}`,
    },
    { revalidateOnFocus: false }
  );
  return {
    todo: data,
    error,
    isValidating,
  };
}
