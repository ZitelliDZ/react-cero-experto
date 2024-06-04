import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers"
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth"
import { clearNotesLogout } from "../../../src/store/journal"
import { demoUser } from "../../fixtures/authFixtures"

 
jest.mock('../../../src/firebase/providers')
jest.mock('../../../src/store/journal')


describe('Pruebas en el archivo authSlice', () => {

    
    const dispatch = jest.fn()
    beforeEach( () => {
        jest.clearAllMocks()
    })


    test('debe invocar el checkingCredentials', async () => {
        
        await checkingAuthentication()(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
         
    })

    test('startGoogleSignIn debe de llamar checkingCredentials, login y singInWithGoogle', async () => {

        const loginData = { ok: true, ...demoUser}
        await singInWithGoogle.mockResolvedValue( loginData )
        
        await startGoogleSignIn()(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )
         
        const loginData2 = { ok: false, ...demoUser, errorMessage: 'Error Google'}
        await singInWithGoogle.mockResolvedValue( loginData2 )
        await startGoogleSignIn()(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( logout('Error Google') )
    })

    test('startLoginWithEmailPassword debe de llamar checkingCredentials, login y loginWithEmailPassword', async () => {
        const loginData = { ok: true, email:'asd@asd.asd',password:'123'}
        await loginWithEmailPassword.mockResolvedValue( loginData )
         
        await startLoginWithEmailPassword({email:'asd@asd.asd',password:'123'})(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )
          
        const loginData2 = { ok: false, email:'asd@asd.asd',password:'123'}
        await loginWithEmailPassword.mockResolvedValue( loginData2 )
        await startLoginWithEmailPassword({email:'asd@asd.asd',password:'123'})(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData2) )
    })

    test('Logout debe de llamar checkingCredentials y logout', async () => {
         

        await startLogout()(dispatch)
        expect( logoutFirebase ).toHaveBeenCalledWith(  )
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() )
        expect( dispatch ).toHaveBeenCalledWith( logout() )
    })
    


})