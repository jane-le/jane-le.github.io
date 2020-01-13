import React, { Component } from "react";
import portrait from "../assets/portrait.jpg";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Grid, Cell } from "react-mdl";
import  theme  from "../lib/theme"

const textStyle = {
  color: "black",
  fontFamily: theme.font,
  letterSpacing: 15,
  fontWeight: "bold",
  fontSize: "5vmin",
  textAlign: "left",
  width: "100%"
};

const imgStyle = {
  width: "40vmin"
};

const divStyle = {
  margin: "auto",
  width: "80%"
};

const pStyle = {
  fontFamily: theme.font,
  color: "black",
  textShadow: "2px 2px 8px rgba(255,255,255, 0.25)",
  margin: "0px",
  padding: "0px",
  textAlign: "justify"
};

const size1 = {
  fontSize: "16px",
  margin: "0px",
  padding: "0px"
};

const noSpace = {
  margin: "0px",
  padding: "0px",
  paddingBottom: "10px"
};

class About extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={textStyle}>about me</h1>
        <Grid>
          <Cell col={6}>
            <div style={pStyle}>
              <h2 style={noSpace}>hey, i'm jane le!</h2>
              <h3 style={size1}>
                i'm a mechatronics engineering student at the uWaterloo.
              </h3>
              <p>let's connect!</p>
            </div>
          </Cell>

          <Cell col={6}>
            <img style={imgStyle} src={portrait} alt="Me" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
