import React, { Component } from "react";
import Wave from "./Wave/Wave";
import SocialIcon from "./SocialIcon/SocialIcon.js"
import theme from "../lib/theme"
import styled from "styled-components"
import data from "../lib/data"

const NameHeader = styled.h1`
  color: ${theme.colorPrimary};
  font-family: ${theme.colorBackground};
` 

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <NameHeader>Jane Le</NameHeader>
          <SocialIcon data={data} width="25px"></SocialIcon>
        </div>
        <Wave fill="#3c00b2"></Wave>
      </div>
    );
  }
}

export default Landing;
