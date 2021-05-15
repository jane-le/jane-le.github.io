import React, { Component } from 'react'
import {ReactComponent as Github} from '../../assets/github-brands.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin-in-brands.svg'
import {ReactComponent as File} from '../../assets/file-solid.svg'
import {ReactComponent as Mail} from '../../assets/envelope-regular.svg'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import Pdf from '../../assets/Resume_Fall_2021_Jane_Le.pdf'


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

  const SocialButton = styled.a`
    border: 1px solid ${theme.colorAccent};
    transition: all .1s ease;
    &:hover {
      background: ${theme.colorAccent};
      color: white;
      transform: scale(1.2);
    }
    display: inline-block;
    margin: 1.5rem;
    color: ${theme.colorAccent};
    height: ${this.props.width};
    width: ${this.props.width};
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const styles = {
    icons: {
      height: '30px',
      width: '30px',
    }
  }
    return (
      <List>
        <li>
          <SocialButton data-tip={data.githubTooltip} target="_blank" href={data.githubLink}>
            <Github style={styles.icons}></Github>  
          </SocialButton>
          <ReactTooltip aria-haspopup='true'/>
        </li>
        <li>
          <SocialButton data-tip={data.resumeTooltip} target="_blank" href={Pdf}>
            <File style={styles.icons}></File> 
          </SocialButton>
          <ReactTooltip aria-haspopup='true'/>
        </li>
        <li>
          <SocialButton data-tip={data.linkedinTooltip} target="_blank" href={data.linkedinLink}>
            <LinkedIn style={styles.icons}></LinkedIn>  
          </SocialButton>
          <ReactTooltip aria-haspopup='true'/>
        </li>
        <li>
          <SocialButton data-tip={data.mailTooltip} href={data.mailLink}>
            <Mail style={styles.icons}></Mail>  
          </SocialButton>
          <ReactTooltip aria-haspopup='true'/>
        </li>
      </List>
    )
  }
}

export default SocialIcon;