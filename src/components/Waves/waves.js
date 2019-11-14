import React, { Component } from "react";
import Wave from "react-wavify";
import styled from "styled-components";

class Waves extends Component {
    render() {
      return (
        <Wave 
            fill='#f79902'
            paused={false}
            options={{
            height: 20,
            amplitude: 20,
            speed: 0.5,
            points: 3
            }}
        />
        );
    }
}
export default Waves; 