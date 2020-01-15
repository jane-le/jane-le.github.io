import React, { Component } from "react"
import styled from 'styled-components'
import SocialIcon from '../components/SocialIcon/SocialIcon'
import ReactTooltip from 'react-tooltip'
import Image from '../assets/portrait.jpg'
import theme from '../lib/theme'

class Header extends Component {
    render() {
        const {
            data,
            colorTheme
        } = this.props;
        
        const NameHeader = styled.a`
            color: ${colorTheme.colorAccent};
            font-family: ${colorTheme.font};
            font-weight: bold;
            margin:0;
            padding: 30px;
            font-size: 58px;
            cursor: pointer;
            z-index: 100;
            letter-spacing: 15px;
        ` 
        const Container = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column; 
            align-items: center;
            height: 100%;
            justify-content: center;
            position: fixed;
        `
        const ImageContainer = styled.img`
            width: 300px;
        
        `

        return (
            <Container>
                <NameHeader data-tip data-for="Tooltip">Jane Le</NameHeader>
                <ReactTooltip place="right" id="Tooltip">
                    <ImageContainer src={Image}/>
                </ReactTooltip>
                <SocialIcon theme={colorTheme} data={data} width={theme.socialIconSize}></SocialIcon>
            </Container>
        );
    }
}

export default Header;