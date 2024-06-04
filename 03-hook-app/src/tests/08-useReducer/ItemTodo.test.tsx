import { render, screen } from "@testing-library/react";
import { ItemTodo } from "../../08-useReducer/ItemTodo";




describe('ItemTodo', () => {
    const todo = {
        id: 1,
        desc: 'Learn React',
        done: false
    }
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();


    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should render the component', () => {
        
        render(<ItemTodo todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />)
        const  p = screen.getByText('Learn React');
        expect(p).toBeTruthy();
    })

    test('should call handleDelete', () => {
        render(<ItemTodo todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />)
        const button = screen.getByText('Delete');
        button.click();
        expect(handleDelete).toHaveBeenCalledWith(1); 
    })

    test('should call handleToggle', () => {
        render(<ItemTodo todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />)
        const button = screen.getByText('Done');
        button.click();
        expect(handleToggle).toHaveBeenCalledWith(1);
    })


}
)