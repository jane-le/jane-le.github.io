import React, { Component } from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"
import data from "../lib/data"
import { Container, Row, Col, Image } from 'react-bootstrap'
import ImageSource from '../assets/me.jpg'
import MostPlayedRecentTrack from './MostPlayedRecentTrack'

export default class ContentCard extends Component {
  render() {
    const {
        title,
        subtitle,
        isPrimary,
        colorTheme
    } = this.props;

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
        font-size: 18px;
        color: ${colorTheme.textColor};
    
    `

    const Title = styled.h2`
        margin: 0; 
        font-family: ${colorTheme.font};
        font-size: 32px;
        line-height: 28px;
        color: ${colorTheme.textColor};
    `

    const Subtitle = styled.h3`
        font-family: ${colorTheme.font};
        font-size: 24px;
        line-height: 20px;
        color: ${colorTheme.textColor};
        margin-top: 0.5rem;
    `
    const TextLooper = styled(TextLoop)`
        color: ${colorTheme.colorAccent};
        word-break: break-word;
        word-wrap: break-word;
    `

    const styles = {
        container: {
            background: colorTheme.colorBackground,
            color: colorTheme.textColor,
            padding: '4rem',

        },
        content: {
            padding: '3rem 3rem 0 3rem',
            textAlgin: 'left',
        }
    }
    return (

        <Container style={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={4} xs={12} style={{padding: 0}}><Image fluid src={ImageSource} /></Col>
                <Col md={8} xs={12} style={styles.content}>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}
                    {
                        isPrimary ? (
                        <TextLooper children={data.aboutLoop} />
                        ) : (<Subtitle></Subtitle>)
                    }
                    </Subtitle>
                    <Divider/>
                    <Description>
                    Hiya! I study Mechatronics Engineering at UWaterloo and have a passion for software development. I've interned at <b>Bunch</b>, <b>Zynga</b>, <b>Climax Media</b> and <b>Siemens Healthineers</b>.
                    </Description>
                    <br></br>
                    <Description>
                     Aside from code, I'm obsessed with houseplants and farming games like Stardew Valley! I enjoy conversations about tech and pretty much anything else, please don't hesitate to reach out 😸.
                    </Description>
                    <br></br>
                    <MostPlayedRecentTrack props={colorTheme}/>
                </Col>
            </Row>
        </Container>

    );
  }
}