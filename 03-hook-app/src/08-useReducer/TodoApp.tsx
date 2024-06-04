 
import { useTodo } from "../hooks/useTodo"
import { ListTodo } from "./ListTodo";
import { AddTodo } from './AddTodo';



export const TodoApp = () => {

  
  const {handleDelete,handleToggle,handleNewTodo,todos,todosLength,todosPending} = useTodo([]) 

 
 

  return (
    <div>
      <h1>TodoApp {  todosLength } - Pendientes { todosPending }</h1>
      <hr />
      <div className="row">
        <div className="col-7">
        <ListTodo todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">

          <h4>Add Todo</h4>
          <hr />
          <AddTodo handleNewTodo={handleNewTodo} />
        </div>
      </div>
      
    </div>
  )
}
 
