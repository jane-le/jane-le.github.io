import React, { Component } from 'react'
import {ReactComponent as Github} from '../../assets/github-brands.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin-in-brands.svg'
import {ReactComponent as File} from '../../assets/file-solid.svg'
import styled from 'styled-components'
import theme from '../../lib/theme'

class SocialIcon extends Component {
  render () {
    const {
      data,
      width
    } = this.props;

  const List = styled.ul`
    list-style: none;
    display: inline-flex;
  `

  const Button = styled.a`
    border: 2px solid ${theme.colorPrimary};
    transition: all .1s ease;
    &:hover {
      background: ${theme.colorPrimary};
      color: white;
    }
    display: inline-block;
    padding: 10px;
    border-radius: 50px;
    margin: 10px;
    color: ${theme.colorPrimary};
  `

    return (
      <List>
        <li>
          <Button target="_blank" href={data.githubLink}>
            <Github height={width} width={width}></Github>  
          </Button>
        </li>
        <li>
          <Button target="_blank" href={data.linkedinLink}>
            <File height={width} width={width}></File> 
          </Button>
        </li>
        <li>
          <Button target="_blank" href={data.resume}>
            <LinkedIn height={width} width={width}></LinkedIn>  
          </Button>
        </li>
      </List>
    )
  }
}

export default SocialIcon;