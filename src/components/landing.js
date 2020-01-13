import React, { Component } from "react";
import Wave from "./Wave/Wave";
import SocialIcon from "./SocialIcon/SocialIcon.js"
import theme from "../lib/theme"
import styled from "styled-components"
import data from "../lib/data"
import About from "../components/about"

const NameHeader = styled.h1`
  color: ${theme.colorPrimary};
  font-family: ${theme.font};
  font-weight: bold;
  margin:0;
  padding: 0;
  letter-spacing: 10px;

` 
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  height: 100%:
  
`

const MainCountainer = styled.div`
  width: 100%;
  height: 100%;
`
class Landing extends Component {
  render() {
    return (
      <MainCountainer>
        <Container>
          <NameHeader>Jane Le</NameHeader>
          <SocialIcon data={data} width="25px"></SocialIcon>
        </Container>
        <Wave fill={theme.colorPrimary}></Wave>
        <About/>
      </MainCountainer>
    );
  }
}

export default Landing;
