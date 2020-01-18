import React, { Component } from "react"
import Wave from "./Wave/Wave"
import theme from "../lib/theme"
import styled from "styled-components"
import data from "../lib/data"
import About from "./About"
import Header from "./Header"


const Waves = styled(Wave)`
  margin-top: 80vh;
  position: relative;
`

class Landing extends Component {
  render() {
    const {
      colorTheme,
      data
    } = this.props;

    const MainCountainer = styled.div`
      width: 100%;
      height: 100%;
      background: ${colorTheme.colorBackground}
    `
    return (
      <MainCountainer>
        <Header data={data} colorTheme={colorTheme}/>
        <Waves fill={colorTheme.colorPrimary}></Waves>
        <About colorTheme={colorTheme}/>
      </MainCountainer>
    );
  }
}

export default Landing;
