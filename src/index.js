import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Breathing from "./routes/Breathing";
import Navbar from "./Navbar";
const app = document.getElementById("root");
const root = ReactDOM.createRoot(app);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="breathing" element={<Breathing />} />
      <Route path="*" redirect="/" />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
