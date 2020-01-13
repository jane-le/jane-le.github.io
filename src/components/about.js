import React, { Component } from "react";
import portrait from "../assets/portrait.jpg";
import  theme  from "../lib/theme"

const textStyle = {
  color: "white",
  fontFamily: theme.font,
  letterSpacing: 15,
  fontWeight: "bold",
  fontSize: "5vmin",
  textAlign: "left",
  width: "100%",
  margin: 0,
};

const imgStyle = {
  width: "40vmin"
};

const divStyle = {
  background: theme.colorPrimary,
};


const size1 = {
  fontSize: "16px",
  margin: "0px",
  padding: "0px",
  color: "white",
};

const noSpace = {
  margin: "0px",
  padding: "0px",
  paddingBottom: "10px",
  color: "white"
};

class About extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={textStyle}>about me</h1>
        <h2 style={noSpace}>hey, i'm jane le!</h2>
          <h3 style={size1}>
            i'm a mechatronics engineering student at the uWaterloo.
          </h3>
        <img style={imgStyle} src={portrait} alt="Me" />
      </div>
    );
  }
}

export default About;
