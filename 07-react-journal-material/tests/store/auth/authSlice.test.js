import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { initialState,authenticatedState,notAuthenticatedState,demoUser } from "../../fixtures/authFixtures"



describe('authSlice', () => {

    test('debe de regresar el estado inicial', () => {
       
        expect( authSlice.name ).toBe('auth')
        
        const state = authSlice.reducer( initialState,{} )

        expect( state ).toEqual( initialState )
 
        
    })

    test('debe de hacer login', () => {
 
        const state = authSlice.reducer( initialState, login( demoUser ) )
        expect( state ).toEqual( demoUser )

    })

    test('debe de hacer logout', () => {
 
        const state = authSlice.reducer( authenticatedState, logout() )
        expect( state ).toEqual( {...notAuthenticatedState,errorMessage:undefined} )

    })
 
    test('debe de hacer logout con mensaje de error', () => {
 
        const state = authSlice.reducer( authenticatedState, logout({errorMessage:'Error'}) )
        expect( state ).toEqual( {...notAuthenticatedState,errorMessage:'Error'} )

    })

    test('debe de hacer checkingCredentials', () => {
 
        const state = authSlice.reducer( authenticatedState, checkingCredentials() )
        expect( state.status ).toEqual( 'checking' )

    })
        

})