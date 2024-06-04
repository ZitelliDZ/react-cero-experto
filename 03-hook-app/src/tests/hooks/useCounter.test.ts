import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';



describe('useCounter', () => {
   
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');


    });

    test('debe de tener el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
        
    });

    test('debe de incrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            
        increment();
        increment(3);
        });
        const { counter } = result.current;
        expect(counter).toBe(104);
        
    });

    test('debe de decrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
            decrement(3);
        })
        const { counter } = result.current;
        expect(counter).toBe(96);
        
    });

    test('debe de resetear el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;
        act(() => {
            increment();
            increment();
            increment();
            reset();
        })
        const { counter } = result.current;
        expect(counter).toBe(100);
        
    });

    
});