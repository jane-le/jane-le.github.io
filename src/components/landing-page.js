import React, { Component } from "react";
import Wave from "react-wavify";
import { SocialIcon } from "react-social-icons";
import "../../src/styles.css";
const nameStyle = {
  color: "#3c00b2",
  fontFamily: "Karla",
  letterSpacing: 15,
  fontWeight: "bold",
  fontSize: "13vmin",
  // textShadow: "2px 2px 8px rgba(0,0,0, 0.25)",
  textAlign: "center",
  marginTop: "15vh",
  marginBottom: "0px"
};

const divStyle = {
  width: "100%"
};

const wavePos1 = {
  position: "absolute",
  bottom: "100px",
  width: "100%"
};

const wavePos2 = {
  position: "absolute",
  bottom: "70px",
  width: "100%"
};

const wavePos3 = {
  position: "absolute",
  bottom: "60px",
  width: "100%"
};

const wavePos4 = {
  position: "absolute",
  bottom: "60px",
  width: "100%"
};

const wavePos5 = {
  position: "absolute",
  bottom: "50px",
  width: "100%"
};

const wavePos6 = {
  position: "absolute",
  bottom: "20px",
  width: "100%"
};
const wavePos7 = {
  position: "absolute",
  bottom: "10px",
  width: "100%"
};

const wavePos8 = {
  position: "absolute",
  bottom: "0px",
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
          <div style={wavePos1}>
            <Wave
              fill="#d4c3f6"
              paused={pauseStatus}
              options={{
                height: 15,
                amplitude: 5,
                speed: 0.5,
                points: 4
              }}
            />
          </div>
          <div style={wavePos2}>
            <Wave
              fill="#3c00b2"
              paused={pauseStatus}
              options={{
                height: 1,
                amplitude: 5,
                speed: 0.3,
                points: 5
              }}
            />
          </div>
          <div style={wavePos3}>
            <Wave
              fill="#FFF"
              paused={pauseStatus}
              options={{
                height: 10,
                amplitude: 10,
                speed: 0.3,
                points: 3
              }}
            />
          </div>
          <div style={wavePos4}>
            <Wave
              fill="#8c52ff"
              paused={pauseStatus}
              options={{
                height: 40,
                amplitude: 10,
                speed: 0.3,
                points: 4
              }}
            />
          </div>
          <div style={wavePos5}>
            <Wave
              fill="#d4c3f6"
              paused={pauseStatus}
              options={{
                height: 50,
                amplitude: 15,
                speed: 0.4,
                points: 3
              }}
            />
          </div>
          <div style={wavePos6}>
            <Wave
              fill="#3c00b2"
              paused={pauseStatus}
              options={{
                height: 40,
                amplitude: 20,
                speed: 0.3,
                points: 2
              }}
            />
          </div>
          <div style={wavePos7}>
            <Wave
              fill="#FFF"
              paused={pauseStatus}
              options={{
                height: 75,
                amplitude: 20,
                speed: 0.3,
                points: 3
              }}
            />
          </div>
          <div style={wavePos8}>
            <Wave
              fill="#8c52ff"
              paused={pauseStatus}
              options={{
                height: 120,
                amplitude: 15,
                speed: 0.2,
                points: 3
              }}
            />
          </div>
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
      </div>
    );
  }
}

export default Landing;
