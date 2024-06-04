import { renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";
import { act } from "react";


describe('useForm', () => {

    const initialForm = {
        name: 'Diego',
        password: '1234',
        email: 'diego@gmail.com'
    };
    
    test('debe de regresar un formulario por defecto', () => {
        
        const {result} = renderHook(() => useForm({
            name: 'Diego',
            password: '1234',
            email: 'diego@gmail.com'
        }));

        expect(result.current).toEqual({
            formState:initialForm,
            name: initialForm.name,
            password: initialForm.password,
            email: initialForm.email,
            onResetForm: expect.any(Function),
            handleInputChange: expect.any(Function)
        }); 
    }
    );

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(() => useForm({
            name: 'Diego',
            password: '1234',
            email: 'diego@gmail.com'
        }));

        expect(result.current).toEqual({
            formState:initialForm,
            name: initialForm.name,
            password: initialForm.password,
            email: initialForm.email,
            onResetForm: expect.any(Function),
            handleInputChange: expect.any(Function)
        }); 

        const newName = 'Melissa';
        act(() => {
            result.current.handleInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            });
        });

        expect(result.current).toEqual({
            formState: {...initialForm, name: newName},
            name: newName,
            password: initialForm.password,
            email: initialForm.email,
            onResetForm: expect.any(Function),
            handleInputChange: expect.any(Function)
        });

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);
    }
    );


    test('debe de realizar el reset del form', () => {
        const {result} = renderHook(() => useForm({}));
 
        const newName = 'Melissa';
        act(() => {
            result.current.handleInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            });
        });

        
        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);

        act(() => {
            result.current.onResetForm();
        });

        
        expect(result.current.name).toBe(undefined);
        expect(result.current.formState.name).toBe(undefined);
    }
    );


});
                    