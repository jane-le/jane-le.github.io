import React, { Component } from "react";
import Wave from "./Wave/Wave";
import SocialIcon from "./SocialIcon/SocialIcon.js"

const nameStyle = {
  color: "#3c00b2",
  fontFamily: "Karla",
  letterSpacing: 15,
  fontWeight: "bold",
  fontSize: "13vmin",
  textAlign: "center",
  marginTop: "15vh",
  marginBottom: "0px"
};

const divStyle = {
  width: "100%"
};

const buttonStyle = {
  stroke: "#3c00b2",
  margin: "10px"
};

const centerButtons = {
  margin: "auto",
  width: "50%",
  textAlign: "center"
};

class Landing extends Component {
  render() {
    return (
      <div style={divStyle}>
        <div>
          <h1 style={nameStyle}>Jane Le</h1>
          <div style={centerButtons}>
            <SocialIcon width='50px'></SocialIcon>
          </div>
        </div>
        <Wave></Wave>
      </div>
    );
  }
}

export default Landing;
