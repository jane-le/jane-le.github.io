import React, { Component } from "react"
import Wave from "./Wave/Wave"
import theme from "../lib/theme"
import styled from "styled-components"
import data from "../lib/data"
import About from "./About"
import Header from "./Header"
import posed, { PoseGroup } from 'react-pose'

const MainCountainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colorBackground}
`

const DarkMode = styled.a`
  position: absolute; 
  top: 0;
  right: 0; 
  color: black;
  cursor: pointer;
  font-family: ${theme.font};
  z-index: 100;
  font-size: 16px;
`

const Waves = styled(Wave)`
  margin-top: 80vh;
  position: relative;
`

class Landing extends Component {

  render() {

    return (
      <MainCountainer>
        <DarkMode>{data.darkMode}</DarkMode>
        <Header data={data} theme={theme}/>
        <Waves fill={theme.colorPrimary}></Waves>
        <About/>
      </MainCountainer>
    );
  }
}

export default Landing;
