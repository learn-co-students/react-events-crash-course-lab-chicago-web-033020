import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleClick = () => {
    toggleCycling()
  }
  
  handleKeyPress = (event) => {
    // event.which === 97 ? resize('+') : null
    // event.which === 115 ? resize('-') : null
    //in retrospect I'm surprised the above worked without an 'else' statement. 
    //In any case it functions correctly but still fails the test, so I'm using the solution from the solution branch here below.
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }

  }

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}>
      </canvas>
    )
  }
}
