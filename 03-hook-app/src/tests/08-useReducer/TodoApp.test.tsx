import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../08-useReducer/TodoApp"
import { useTodo } from "../../hooks/useTodo"

jest.mock('../../hooks/useTodo' )


describe('TodoApp', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const handleNewTodo = jest.fn();
    (useTodo as jest.Mock).mockReturnValue({
        todos: [
            {
                id: 1,
                desc: 'Learn React',
                done: false
            },
            {
                id: 2,
                desc: 'Learn2 React',
                done: true
            },
            {
                id: 3,
                desc: 'Learn3 React',
                done: false
            }
        ],
        handleDelete:  handleDelete,
        handleToggle:  handleToggle,
        handleNewTodo:  handleNewTodo,
        todosPending: 2,
        todosLength: 3
    })
    test('should render the component', () => {
        
        render(<TodoApp />)

        expect(screen.getByText('Learn React')).toBeTruthy();
        expect(screen.getByText('Learn2 React')).toBeTruthy();
        expect(screen.getByText('Learn3 React')).toBeTruthy();
        
    })

    test('should call handleDelete', () => {
        render(<TodoApp />)
        const button = screen.getByRole('Delete'); 
        button.click();
        expect(handleDelete).toHaveBeenCalled();
    })

    test('should call handleToggle', () => {
        render(<TodoApp />)
        const button = screen.getByText('Done'); 
        button.click();
        expect(handleToggle).toHaveBeenCalled();
    })
    
     
    
}
)