import React, { Component } from "react"
import Wave from "./Wave/Wave"
import theme from "../lib/theme"
import styled from "styled-components"
import data from "../lib/data"
import About from "./About"
import Header from "./Header"
import CatBtn from "./CatBtn"

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
      top: 10px;
      right: 10px; 
      color: black;
      cursor: pointer;
      font-family: ${colorTheme.font};
      z-index: 100;
      font-size: 12px;
      color: #FFFFFF;
      border-radius: 15px;
      transition: all .1s ease;
      &:hover {
        background: #FFFFFF;
        transform: scale(1.1);
        color: ${colorTheme.colorPrimary}
      }
      border: 1px solid ${colorTheme.colorPrimary};
      background: ${colorTheme.colorPrimary};
    `
    return (
      <MainCountainer>
        <CatBtn catPhotos={data.catPhotos} colorTheme={colorTheme} catText={data.catBtnText}></CatBtn>
        <DarkMode onClick={this.handleDarkClick}>{isDarkMode ?data.defaultMode : data.darkMode}</DarkMode>
        <Header data={data} colorTheme={colorTheme}/>
        <Waves fill={colorTheme.colorPrimary}></Waves>
        <About colorTheme={colorTheme}/>
      </MainCountainer>
    );
  }
}

export default Landing;
