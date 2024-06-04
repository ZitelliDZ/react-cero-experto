import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [count, setCount] = useState(1);
  const { data, isLoading } = useGetTodosQuery();
  const { data : data2, isLoading : isL } = useGetTodoQuery(count);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  }





  return (
    <div>
      <h1>Todo App</h1>
      <hr />
      <h4>isLoading {isLoading ? "true" : "false"}</h4>
      <h4>isLoading {isL  ? "true" : "false"}</h4>

      <button onClick={handleIncrement}>Next</button> 
        <button onClick={handleDecrement}>Previous</button>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
