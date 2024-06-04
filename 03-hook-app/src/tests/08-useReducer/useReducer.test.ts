import { todoReducer } from "../../08-useReducer/todoReducer"




describe('useReducer', () => {

    const initialState = [{
        id: 1,
        desc: 'Learn React',
        done: false
    }];
    
    test('should return the default state', () => {
        const state = todoReducer( initialState, {type: 'default'})
        expect(state).toEqual(  initialState )
    })

    test('should add a todo', () => {
        const state = todoReducer( [], {type: 'add', payload: {id: 1, desc: 'Learn React'}})
        expect(state).toEqual(  [{id: 1, desc: 'Learn React'}] )
    })

    test('should delete a todo', () => {
        const state = todoReducer(  [{id: 1, desc: 'Learn React',done:true},
            {id: 2, desc: 'Learn React',done:false},
            {id: 3, desc: 'Learn React',done:true}
        ] , {type: 'delete', payload: 1})
        expect(state).toEqual(  [{id: 2, desc: 'Learn React',done:false},
            {id: 3, desc: 'Learn React',done:true}
        ] )
    })

    test('should toggle a todo', () => {
        const state = todoReducer( [{id: 1, desc: 'Learn React', done: false},
            {id: 2, desc: 'Learn React', done: false},
            {id: 3, desc: 'Learn React', done: false}
        
        ] , {type: 'toggle', payload:2 })
        expect(state).toEqual(  [{id: 1, desc: 'Learn React', done: false},
            {id: 2, desc: 'Learn React', done: true},
            {id: 3, desc: 'Learn React', done: false}
        ] )
    })

});