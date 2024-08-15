import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css";
import { APPContext } from "./components/Context";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter> 
    <APPContext>
      <App />
      <Toaster/>
    </APPContext>
  </BrowserRouter>
);
