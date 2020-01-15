import React, { Component } from 'react'
import {ReactComponent as Github} from '../../assets/github-brands.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin-in-brands.svg'
import {ReactComponent as File} from '../../assets/file-solid.svg'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import Pdf from '../../assets/resume.pdf'


const List = styled.ul`
  list-style: none;
  display: inline-flex;
  margin: 0;
  padding: 0;
`

class SocialIcon extends Component {
  render () {
    const {
      data,
      width,
      theme
    } = this.props;

  const Button = styled.a`
    border: 1px solid ${theme.colorAccent};
    transition: all .1s ease;
    &:hover {
      background: ${theme.colorAccent};
      color: white;
      transform: scale(1.2);
    }
    display: inline-block;
    padding: 10px;
    border-radius: 50px;
    margin: 8px;
    color: ${theme.colorAccent};
    height: ${this.props.width};
    width: ${this.props.width};
  `

    return (
      <List>
        <li>
          <Button data-tip={data.githubTooltip} target="_blank" href={data.githubLink}>
            <Github height={width} width={width}></Github>  
          </Button>
          <ReactTooltip aria-haspopup='true'/>
        </li>
        <li>
          <Button data-tip={data.resumeTooltip} target="_blank" href={Pdf}>
            <File height={width} width={width}></File> 
          </Button>
          <ReactTooltip aria-haspopup='true'/>
        </li>
        <li>
          <Button data-tip={data.linkedinTooltip} target="_blank" href={data.linkedinLink}>
            <LinkedIn height={width} width={width}></LinkedIn>  
          </Button>
          <ReactTooltip aria-haspopup='true'/>
        </li>
      </List>
    )
  }
}

export default SocialIcon;