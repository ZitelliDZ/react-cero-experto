import { useForm } from "../hooks/useForm";

interface Props {
    handleNewTodo: any;
    }

export const AddTodo = ( {handleNewTodo} : Props) => {

    const { formState, handleInputChange, onResetForm } = useForm({
        description: ''
      });
     
       
    
       const onSubmit = (e: any) => {
        e.preventDefault();
        
        if (formState.description.trim().length <= 1) {
          return;
        }
    
        const newTodo = {
          id: new Date().getTime(),
          desc: formState.description,
          done: false
        }
    
    
        handleNewTodo(newTodo)
        onResetForm()
      }
  return (
    
    <form   onSubmit={onSubmit}>
            <input type="text" name="description" placeholder="Learn..." autoComplete="off"   onChange={handleInputChange} value={formState.description} className="form-control" />
            <button type="submit" className="btn btn-outline-primary mt-1">Add</button>
          </form>
  )
}
 
