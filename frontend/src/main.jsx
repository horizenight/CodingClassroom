import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { NavbarProvider } from "./context/NavbarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </BrowserRouter>
);
