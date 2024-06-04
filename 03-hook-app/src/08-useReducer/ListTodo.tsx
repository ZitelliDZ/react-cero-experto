import { ItemTodo } from "./ItemTodo";
import { Todo } from "./todoReducer";


 interface Props {
    todos: Todo[];
    handleDelete: any;
    handleToggle: any;
}

export const ListTodo = ( {todos, handleDelete, handleToggle} : Props) => {
  return (
    <ul>
        {
          todos.map((todo) => (
            <ItemTodo key={todo.id} todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />
            
          ))
        }
      </ul>
  )
}

