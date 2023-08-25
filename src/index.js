import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HeaderAlert from "./components/HeaderAlert";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Events } from "./components/Events";
import { Categories } from "./components/Categories";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderAlert />
    <Navbar />
    <Header />
    <Events />
    <Categories />
  </React.StrictMode>
);

reportWebVitals();
