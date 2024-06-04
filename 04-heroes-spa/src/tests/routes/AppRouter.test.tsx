import { render, screen } from "@testing-library/react";
import { AppRouter } from "../../routes/AppRouter";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from '../../auth/context/AuthContext';




describe('AppRouter', () => {
    test('debe mostrar el login si no está autenticado', () => {
       
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>

                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        screen.debug();
        expect(screen.getByText('Login')).toBeTruthy();
        
    });

    test('debe mostrar el componente de marvel si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Diego',
                id: '123'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>

                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Marvel')).toBeTruthy();
    });
});