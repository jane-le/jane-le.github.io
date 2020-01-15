import React, { Component } from "react";
import styled from 'styled-components';
import theme from '../lib/theme'

const Container = styled.div`
    background-attachment: fixed; 
    background: ${theme.colorPrimary};
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
` 
class ContentContainer extends Component {
  render() {
    return (
      <Container/>
    );
  }
}

export default ContentContainer;
