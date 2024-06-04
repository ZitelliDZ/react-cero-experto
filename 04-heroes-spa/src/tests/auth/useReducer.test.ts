 
import { authReducer } from "../../auth/context/authReducer";
import { types } from "../../auth/types/types";




describe('useReducer', () => {

    test('should return the initial state', () => {
        const state = authReducer({ }, {type: types.login, payload: {id:'123',name: 'Diego'}});
         
        expect(state).toEqual( {logged: true, user: {id: '123', name: 'Diego'}} );
    });

    test('should authenticate and place the user name', () => {
        const state = authReducer({ }, {type: types.login, payload: {id:'1234',name: 'Ale'}});
         
        expect(state).toEqual( {logged: true, user: {id: '1234', name: 'Ale'}} );
    });

    test('should delete the user name and logged in false', () => {
        const state = authReducer({ }, {type: types.logout , payload: { id: '123', name: 'Diego'}});
         
        expect(state).toEqual( {logged: false , user: null} );
    });
});