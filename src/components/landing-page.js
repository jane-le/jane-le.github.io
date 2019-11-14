import React, { Component } from "react";
import Waves from "../../src/components/Waves/waves";
import { SocialIcon } from "react-social-icons";

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
var pauseStatus = false;

class Landing extends Component {
  render() {
    return (
      <div style={divStyle}>
        <div>
          <h1 style={nameStyle}>Jane Le</h1>
          <div style={centerButtons}>
            <SocialIcon
              className="button-style"
              bgColor="rgba(0,0,0,0)"
              fgColor="#FFF"
              network="linkedin"
              url="https://www.linkedin.com/in/jane-le-245362155/"
              style={buttonStyle}
            />
            <SocialIcon
              className="button-style"
              bgColor="rgba(0,0,0,0)"
              fgColor="#FFF"
              network="github"
              url="https://github.com/jane-le/"
              style={buttonStyle}
            />
            <SocialIcon
              className="button-style"
              bgColor="rgba(0,0,0,0)"
              fgColor="#FFF"
              network="mailto"
              url="mailto:janele913@gmail.com"
              style={buttonStyle}
            />
          </div>
        </div>
        <Waves></Waves>
      </div>
    );
  }
}

export default Landing;
