import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">

        <HelmetProvider>
          <App />
        </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
