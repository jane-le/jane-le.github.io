import React, { Component } from "react"
import styled from 'styled-components'
import SocialIcon from '../components/SocialIcon/SocialIcon'

class Header extends Component {
    render() {
        const {
            data,
            theme
        } = this.props;
        const NameHeader = styled.h1`
            color: ${theme.colorPrimary};
            font-family: ${theme.font};
            font-weight: bold;
            margin:0;
            padding: 0;
            letter-spacing: 10px;
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
        return (
            <div>
                <Container>
                    <NameHeader>Jane Le</NameHeader>
                    <SocialIcon data={data} width={theme.socialIconSize}></SocialIcon>
                </Container>
            </div>
        );
    }
}

export default Header;
