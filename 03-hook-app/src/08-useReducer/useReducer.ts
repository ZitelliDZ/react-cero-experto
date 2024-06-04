

const initialState = [{
    id: 1,
    todo: 'Buy bread',
    done: false
}];

interface Actions  
{
    type: 'ADD'| 'DELETE'| 'TOGGLE'| 'TOGGLE-OLD';
    payload?: any;
}


export const todoReducer = (state = initialState, action : Actions) => {


    if (action?.type === 'ADD') {
        return [...state, action.payload];
    }

    return state;
}