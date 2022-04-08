import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RegistartionContextProvider } from "./Context/RegistartionContext";
ReactDOM.render(
  <React.StrictMode>
    <RegistartionContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RegistartionContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
