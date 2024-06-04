// import { CounterApp } from './01-useState/CounterApp';
// import { CounterCustomHook } from './02-CounterCustomHook/CounterCustomHook';
// import { SimpleForm } from './03-useEffect/SimpleForm';
// import { FormCustomHook } from './03-useEffect/FormCustonHook';
// import { MultipleCustomHooks } from './04-MultipleCustomHooks/MultipleCustomHooks';
// import FocusScreen from './05-useRef/FocusScreen';
// import { Layout } from './06-useLayoutEffect/Layout';
// import { Memorize } from './07-memo/Memorize';
// import { MemoHook } from './07-memo/MemoHook';
// import { CallbackHook } from './07-memo/CallbackHook';

//import { TodoApp } from "./08-useReducer/TodoApp"
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./09-useContext/MainApp";

export const HooksApp = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>HooksApp</h1>
        <hr />
        {/* <CounterApp />
            <hr />
            <CounterCustomHook />
            <hr />
            <SimpleForm />
            <hr />
            <FormCustomHook />
            <hr />
            <MultipleCustomHooks />
            <hr />
            <FocusScreen />
            <hr />
            <Layout /> */}

        {/* <hr />
            <Memorize />
            <hr />
            <MemoHook />
            <hr />
            <CallbackHook  /> */}

        <hr />
        <MainApp />
      </div>
    </BrowserRouter>
  );
};
