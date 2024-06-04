import { useEffect, useReducer } from "react";
import { Todo, todoReducer } from "../08-useReducer/todoReducer"; 
 

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
};

export const useTodo = (initialState: Todo[]) => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId: number) => {
    dispatchTodo({ type: "delete", payload: todoId });
  };
  const handleToggle = (todoId: number) => {
    dispatchTodo({ type: "toggle", payload: todoId });
  };
  const handleNewTodo = (newTodo: Todo) => {
    dispatchTodo({ type: "add", payload: newTodo });
  }
  const todosPending = todos.filter(todo => !todo.done).length;
  const todosLength = todos.length;

  return {
    todos,
    handleDelete,
    handleToggle,
    handleNewTodo,
    todosPending,
    todosLength
  };
};
