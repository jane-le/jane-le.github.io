import React, {Component} from React
import styled from "styled-components"

const Link = styled.a`
`



class ImageOnHover extends Component {
  constructor(props) {
    super(props); 
    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    console.log('Test');
  }
  render() {
    const {
      imagePath
    } = this.props; 
    return (
      <Link onMouseEnter={this.onHover}></Link>
    );
  }
}

export default ImageOnHover;