import React, { Component } from "react";
import portrait from "../assets/portrait.jpg";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Grid, Cell } from "react-mdl";
import { SocialIcon } from "react-social-icons";
const textStyle = {
  color: "black",
  fontFamily: "Karla",
  letterSpacing: 15,
  fontWeight: "bold",
  fontSize: "5vmin",
  textShadow: "2px 2px 8px rgba(0,0,0, 0.25)",
  textAlign: "left",
  width: "100%"
};

const imgStyle = {
  width: "50vmin"
};

const divStyle = {
  margin: "auto",
  width: "80%"
};

const pStyle = {
  fontFamily: "Karla",
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
const buttonStyle = {
  stroke: "#000",
  margin: "2px",
  padding: "0px",
  width: 30,
  height: 30
};

const buttonStyle1 = {
  stroke: "#000",
  marginRight: "2px",
  padding: "0px",
  width: 30,
  height: 30
};
const noSpace = {
  margin: "0px",
  padding: "0px",
  paddingBottom: "10px"
};

const purpleColor = {
  color: "rgb(172,46,149)"
};
class About extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={textStyle}>about me</h1>
        <Grid>
          <Cell col={12}>
            <img style={imgStyle} src={portrait} alt="Picture of Me" />
          </Cell>
          <Cell col={1}> </Cell>
          <Cell col={6}>
            <div style={pStyle}>
              <h2 style={noSpace}>hey, i'm jane le!</h2>
              <h3 style={size1}>
                i'm a mechatronics engineering student at the uWaterloo.
              </h3>
              <p>let's connect!</p>
              <SocialIcon
                className="button-style"
                bgColor="rgba(0,0,0,0)"
                fgColor="black"
                network="linkedin"
                width="15px"
                url="https://www.linkedin.com/in/jane-le-245362155/"
                style={buttonStyle1}
              />
              <SocialIcon
                className="button-style"
                bgColor="rgba(0,0,0,0)"
                fgColor="black"
                network="github"
                width="15px"
                url="https://github.com/jane-le/"
                style={buttonStyle}
              />
              <SocialIcon
                className="button-style"
                bgColor="rgba(0,0,0,0)"
                fgColor="black"
                width="15px"
                network="mailto"
                url="mailto:janele913@gmail.com"
                style={buttonStyle}
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
