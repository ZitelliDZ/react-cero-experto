import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
//import { PokemonApp } from "./PokemonApp.tsx";
import { TodoApp } from "./TodoApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
