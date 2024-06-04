import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.tsx'
import "./index.css";
import 'animate.css';
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
