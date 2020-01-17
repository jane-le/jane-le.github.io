import React, { Component } from "react"
import styled from "styled-components"
import posed, { PoseGroup } from 'react-pose'

class CatBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            imageIndex: 0,
        }
        this.top = 60;
        this.right = 0; 

        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        if(!this.state.isClicked) {
            this.setState({
                isClicked: true,
                imageIndex: Math.floor(Math.random() * this.props.catPhotos.length),
            });
            this.top = Math.floor(Math.random() * 40 + 5);
            this.right = Math.floor(Math.random() * 80);
        }
    } 

    componentDidMount() {
        setInterval(() => {
            if(this.state.isClicked) {
                this.setState({
                    isClicked: false,
                })
            }
        },3000);

    }
    render() {
        const {
            colorTheme,
            catPhotos, 
            catText
        } = this.props;

        const {
            isClicked,
            imageIndex
        } = this.state;

        const CatButton = styled.a`
            margin: 0;
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
        const AnimatedImageProps = posed.img({
            enter: {
                opacity: 1,
                transition: { duration: 200, ease: "linear" }
 
              },
              exit: {
                opacity: 0,
                transition: { duration: 200, ease: "linear" }
 
              }
        })

        const Image = styled(AnimatedImageProps)`
        position: fixed; 
        width: 200px;
        top: ${this.top}%;
        right: ${this.right}%;
        z-index: 10000;
        padding: 0;
        margin: 0;
        `

        return (
            <React.Fragment>
                <CatButton onClick={this.handleBtnClick}>{catText}</CatButton>
                <PoseGroup>
                    {isClicked && 
                        <Image key="catImage" src={catPhotos[imageIndex]}/>
                    }
                </PoseGroup>
            </React.Fragment>
        );
    }
}

export default CatBtn;
