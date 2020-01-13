import React from "react";
import ReactDOM from "react-dom";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Layout, Content } from "react-mdl";
import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div className="demo-big-content">
      <Layout
        style={{ background: "white center / cover"}}>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
