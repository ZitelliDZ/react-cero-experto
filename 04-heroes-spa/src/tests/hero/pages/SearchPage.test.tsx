import { render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages";

// const mockUseNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate:  mockUseNavigate,
// }));


describe('SearchPage', () => {

    // beforeEach(() => {
    //     jest.clearAllMocks();
    // });

    test('debe de mostrarse correctamente', () => {
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        screen.debug();
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {

        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        screen.debug();
        expect(screen.getByDisplayValue('batman')).toBeTruthy();
        expect(screen.getByText('Batman')).toBeTruthy();
        //expect(container).toMatchSnapshot();

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman'); 
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        const alertInfo = screen.getByLabelText('alerta-info');
        expect(alertInfo.style.display).toBe('none');
        const alertDanger = screen.getByLabelText('alerta-danger');
        expect(alertDanger.style.display).toBe('none');
    });

    test('debe de mostrar un error si el hero no existe', () => {

        const q = 'batman123';
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q='+q]}>
                <SearchPage />
            </MemoryRouter>
        )

        screen.debug();
        expect(screen.getByText('Heroe '+q+' no encontrado')).toBeTruthy();
        //expect(container).toMatchSnapshot();

        const alertInfo = screen.getByLabelText('alerta-info');
        expect(alertInfo.style.display).toBe('none');
        const alertDanger = screen.getByLabelText('alerta-danger');
        expect(alertDanger.style.display).toBe('');
    });

    test('debe de mostrar un error si el queryString está vacío', () => {

        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=']}>
                <SearchPage />
            </MemoryRouter>
        )

        screen.debug();
        expect(screen.getByText('Search a hero')).toBeTruthy();
        //expect(container).toMatchSnapshot();

        const alertInfo = screen.getByLabelText('alerta-info');
        expect(alertInfo.style.display).toBe('');
        const alertDanger = screen.getByLabelText('alerta-danger');
        expect(alertDanger.style.display).toBe('none');
    });
});