import React, { Component } from "react"
import theme from "../lib/theme"
import styled from "styled-components"
import TextLoop from "react-text-loop"
import data from "../lib/data"

class Card extends Component {
  render() {
    const {
        title,
        subtitle,
        description,
        isPrimary
    } = this.props;

    const Container = styled.div`
        background: ${theme.cardBackgroundColor};
        color: ${theme.textColor};
        flex-direction: column;
        display: flex; 
        align-items: left;
        overflow: hidden; 
        border-radius: 30px;
        opacity: 100%;
        padding: 10vh;
        margin: 30px;
        box-shadow: 1px 1px 8px ${theme.colorBackground};
        height: ${isPrimary ? theme.cardPrimaryHeight : theme.cardHeight};
        width: ${isPrimary ? theme.cardPrimaryWidth : theme.cardWidth};
        @media screen and (max-width: 767px) {
            height: 55vh;
            width: 25vh;
        }
        
    `
    const Divider = styled.hr`
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 0;
        border-top: 1px solid ${theme.cardLineColor};
        padding-top: 15px;
        
    `

    const Description = styled.p`
        margin: 0; 
        padding: 0;
        font-family: ${theme.font};
        font-size: 14px;
        text-align: center;
    
    `

    const Title = styled.h2`
        margin: 0; 
        font-family: ${theme.font};
        font-size: 24px;
        line-height: 28px;
    `

    const Subtitle = styled.h3`
        margin: 0; 
        padding: 0;
        font-family: ${theme.font};
        font-size: 16px;
        line-height: 20px;
    `
    const TextLooper = styled(TextLoop)`
        color: ${theme.colorPrimary}
    `

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}
            {
                isPrimary ? (
                <TextLooper children={data.aboutLoop} />
                ) : (<Subtitle></Subtitle>)
            }
            </Subtitle>
            <Divider/>
            <Description>{description}</Description>
        </Container>
    );
  }
}

export default Card;
