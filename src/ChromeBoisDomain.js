import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    // console.log(event.clientX, event.clientY)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleClick = event => {
    // console.log(event)
    toggleCycling(event)
  }

  handleType = event => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize(4)
    }
  }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas onClick={this.handleClick}
        onKeyPress={this.handleType}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}