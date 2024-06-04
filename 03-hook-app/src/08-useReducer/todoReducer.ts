 



export interface Todo {
    id: number;
    desc: string;
    done: boolean;
}



export const todoReducer = ( state  : Todo[] = [], action: any ) => {

     
 


    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return state;
    }
}