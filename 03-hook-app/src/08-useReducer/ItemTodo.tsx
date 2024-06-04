import { Todo } from "./todoReducer";



interface Props {
    todo: Todo;
    handleDelete: any;
    handleToggle: any;
}

export const ItemTodo = ( {todo, handleDelete, handleToggle} : Props) => {
  return (
    <li key={todo.id}>
              <p  >{todo.desc}</p>
              <p>{todo.done ? 'Done' : 'Pending'}</p>
              <button aria-label="Done"
               onClick={() =>  handleToggle(todo.id)}>{todo.done ? 'Pending' : 'Done'}</button>
              <button onClick={() =>  handleDelete(todo.id)}>Delete</button>
            </li>
  )
}
 
