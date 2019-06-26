import React from "react";
import ReactDOM from "react-dom";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import Main from "./components/main";

const textStyle = {
  fontFamily: "Karla",
  //textShadow: "2px 2px 8px rgba(0, 0, 0, 0.25)",
  color: "#3c00b2"
};

const drawerStyle = {
  backgroundColor: "#FFF",
  borderRight: "0px",
  transitionDuration: "0.7s"
};
function App() {
  return (
    <div className="demo-big-content">
      <Layout
        style={{
          background: "white center / cover"
        }}
      >
        <Header to="/" title="" scroll transparent style={textStyle}>
          <Navigation>
            <Link style={textStyle} to="/">
              home
            </Link>
            <Link style={textStyle} to="/aboutme">
              about
            </Link>
            <a
              style={textStyle}
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1_B7d36IwspjvpXdgbiabeULaNkUPh87v/view"
            >
              resume
            </a>
          </Navigation>
        </Header>
        <Drawer style={drawerStyle} title="Jane Le">
          <Navigation style={textStyle}>
            <Link to="/">home</Link>
            <Link to="/aboutme">about</Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1_B7d36IwspjvpXdgbiabeULaNkUPh87v/view"
            >
              resume
            </a>
          </Navigation>
        </Drawer>
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
