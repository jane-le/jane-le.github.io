import React from "react";
import ReactDOM from "react-dom";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import "./styles.css";
import { BrowserRouter} from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <Main/>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
