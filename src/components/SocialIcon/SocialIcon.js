import React, { Component } from 'react'
import {ReactComponent as Github} from '../../assets/github-brands.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin-in-brands.svg'
import {ReactComponent as File} from '../../assets/file-solid.svg'

class SocialIcon extends Component {
  render () {
    const {
      className,
      fill,
      link,
      width
    } = this.props
    return (
        <div>
            <a><Github width={this.props.width}></Github></a>
            <a><LinkedIn width={this.props.width}></LinkedIn></a>
            <a><File width={this.props.width}></File></a>
        </div>
    )
  }
}

export default SocialIcon;