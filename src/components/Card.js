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
        isPrimary,
        colorTheme
    } = this.props;

    const Container = styled.div`
        background: ${colorTheme.colorBackground};
        color: ${colorTheme.textColor};
        flex-direction: column;
        display: flex; 
        align-items: left;
        overflow: hidden; 
        border-radius: 30px;
        opacity: 100%;
        padding: 10vh;
        margin: 30px;
        box-shadow: 1px 1px 8px ${colorTheme.colorBackground};
        height: ${isPrimary ? theme.cardPrimaryHeight : theme.cardHeight};
        width: ${isPrimary ? theme.cardPrimaryWidth : theme.cardWidth};
        @media screen and (max-width: 767px) {
            height: 50vh;
            width: 35vh;
            padding: 5vh;
        }

        @media screen and (max-width: 320px) {
            height: 55vh;
            width: 45vh;
            padding: 5vh;
        }
        
    `
    const Divider = styled.hr`
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 0;
        border-top: 1px solid ${colorTheme.colorPrimary};
        padding-top: 15px;
        
    `

    const Description = styled.p`
        margin: 0; 
        padding: 0;
        font-family: ${colorTheme.font};
        font-size: 14px;
        text-align: center;
        color: ${colorTheme.textColor};
    
    `

    const Title = styled.h2`
        margin: 0; 
        font-family: ${colorTheme.font};
        font-size: 24px;
        line-height: 28px;
        color: ${colorTheme.textColor};
    `

    const Subtitle = styled.h3`
        margin: 0; 
        padding: 0;
        font-family: ${colorTheme.font};
        font-size: 16px;
        line-height: 20px;
        color: ${colorTheme.textColor};
    `
    const TextLooper = styled(TextLoop)`
        color: ${colorTheme.colorAccent};
        word-break: break-word;
        word-wrap: break-word;
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
