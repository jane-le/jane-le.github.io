import React, { Component } from "react";
import styled from "styled-components"

class CatBtn extends Component {
    constructor(props) {
        super(props);
    
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleBtnClick() {
        console.log('clicked');
    }
    

    render() {
        const {
            colorTheme,
            catSrc, 
            catText
        } = this.props;

        const CatButton = styled.a`
            position: fixed; 
            padding: 10px;
            top: 10px;
            left: 10px; 
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
            <CatButton onClick={this.handleBtnClick}>{catText}</CatButton>
        );
    }
}

export default CatBtn;
