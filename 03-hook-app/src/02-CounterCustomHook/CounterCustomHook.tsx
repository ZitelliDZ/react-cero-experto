import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>CounterCustomHook</h1>

      <h2>{counter}</h2>
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +2
      </button>
        <button className="btn btn-primary" onClick={ () => increment() }>
            +1
        </button>
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
        <button className="btn btn-secondary" onClick={() => decrement()}>
            -1
        </button>
      <button className="btn btn-secondary" onClick={ () => decrement(2)}>
        -2
      </button>
    </>
  );
};
