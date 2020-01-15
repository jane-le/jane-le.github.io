import React, { Component } from "react"
import theme  from "../lib/theme"
import Card from "../components/Card"
import styled from "styled-components"
import data from "../lib/data"


const Container = styled.div`
    background-attachment: fixed; 
    background: ${theme.colorPrimary};
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    height: 100vh;
    position: relative;
    justify-content: center;
` 

const NameHeader = styled.h1`
  color: ${theme.colorBackground};
  font-family: ${theme.font};
  margin:0;
  font-size: 34px;
  font-weight: bold;
` 
const Footer = styled.h1`
  color: ${theme.colorBackground};
  font-family: ${theme.font};
  margin:0;
  padding: 10px;
  font-size: 12px;
  position: absolute; 
  bottom: 0;
` 

class About extends Component {
  render() {
    return (
      <Container>
        <NameHeader>Me</NameHeader>
        <Card 
          description={data.about.description} 
          title={data.about.title}
          subtitle={data.about.subtitle}
          isPrimary={true}>
        </Card>
      <Footer>{data.footer}</Footer>
      </Container>
    );
  }
}

export default About;
