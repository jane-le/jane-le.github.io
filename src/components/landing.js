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
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: false,
    }

    this.handleDarkClick = this.handleDarkClick.bind(this)
  }

  handleDarkClick() {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    });
  }

  render() {
    const {isDarkMode} = this.state;
    const colorTheme = isDarkMode ? theme.darkTheme : theme.defaultTheme;
    const MainCountainer = styled.div`
      width: 100%;
      height: 100%;
      background: ${colorTheme.colorBackground}
    `
    const DarkMode = styled.a`
      position: fixed; 
      padding: 10px;
      top: 0;
      right: 0; 
      color: black;
      cursor: pointer;
      font-family: ${colorTheme.font};
      z-index: 100;
      font-size: 16px;
      color: ${colorTheme.textColor}
    `
    return (
      <MainCountainer>
        <DarkMode onClick={this.handleDarkClick}>{isDarkMode ?data.defaultMode : data.darkMode}</DarkMode>
        <Header data={data} theme={colorTheme}/>
        <Waves fill={colorTheme.colorPrimary}></Waves>
        <About colorTheme={colorTheme}/>
      </MainCountainer>
    );
  }
}

export default Landing;
