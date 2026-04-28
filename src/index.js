import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./hooks/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      
        <AuthProvider>
        <HelmetProvider>
          <App />
          </HelmetProvider>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
