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
    min-height: 100%;
    padding-top: 5vh;
    position: relative;
` 

const NameHeader = styled.h1`
  color: ${theme.colorBackground};
  font-family: ${theme.font};
  margin:0;
  padding: 10px;
  font-size: 34px;
  font-weight: bold;
` 

class Projects extends Component {
  render() {
    return (
      <Container>
        <NameHeader>Projects</NameHeader>
        {data.projects.map(item => 
          <Card 
            description={item.description} 
            title={item.title}
            subtitle={item.subtitle}
            isPrimary={false}>
          </Card>
        )}
      </Container>
    );
  }
}

export default Projects;
