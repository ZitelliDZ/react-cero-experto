import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../04-MultipleCustomHooks/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";


jest.mock('../../hooks/useCounter');
jest.mock('../../hooks/useFetch');


describe('MultipleCustomHooks', () => {
    test('debe de mostrarse correctamente', () => {

        useCounter.mockReturnValue({
            decrement: jest.fn(),
            increment: jest.fn(),
            counter: 1
        });
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        });
        const wrapper = render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
    });

    test('debe de mostrar la información', () => { 
        useCounter.mockReturnValue({
            decrement: jest.fn(),
            increment: jest.fn(),
            counter: 1
        });
        useFetch.mockReturnValue({
            data: {
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                },
                id: 1
            },
            isLoading: false,
            hasError: false
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('bulbasaur')).toBeTruthy();
        expect(screen.getByText('Siguiente')).toBeTruthy();
        expect(screen.getByText('Anterior')).toBeTruthy();
        expect(screen.getByText('Pokemon number: 1')).toBeTruthy();
        //screen.debug();

        
        
    });

    test('debe de llamar la función increment', () => {
        
        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            decrement: jest.fn(),
            increment: mockIncrement,
            counter: 1
        });
        useFetch.mockReturnValue({
            data: {
                name: 'ivysaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
                },
                id: 2
            },
            isLoading: false,
            hasError: false
        });
        render(<MultipleCustomHooks />);
        screen.getByText('Siguiente').click();
        expect(mockIncrement).toHaveBeenCalled();
        expect(useFetch).toHaveBeenCalled();
        expect(screen.getByText('ivysaur')).toBeTruthy();
    }
    );

    test('debe de llamar la función decrement', () => {
        const mockDecrement = jest.fn();
        useCounter.mockReturnValue({
            decrement: mockDecrement,
            increment: jest.fn(),
            counter: 1
        });
        useFetch.mockReturnValue({
            data: {
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                },
                id: 1
            },
            isLoading: false,
            hasError: false
        });
        render(<MultipleCustomHooks />);
        screen.getByText('Siguiente').click();
        screen.getByText('Anterior').click();
        expect(mockDecrement).toHaveBeenCalled();
        expect(useFetch).toHaveBeenCalled();
        expect(screen.getByText('bulbasaur')).toBeTruthy();
    }
    );
 
});