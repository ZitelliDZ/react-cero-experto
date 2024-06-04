import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";

function App() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = (value = 2) => {
    
    if (value == 1) {dispatch(increment());return;}

    dispatch({ type: incrementByAmount.type, payload: value });
  };

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleIncrement(3)}>count is {counter}</button>
        
        <button onClick={() => handleIncrement(1)}>Increment</button>
        
        <button onClick={() => handleIncrement(3)}>Increment by 3</button>

        <button onClick={() => handleDecrement()}>Decrement</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

