import React, { Component } from 'react'

export default class ReactEvents extends Component {
    constructor(){
        super();
        this.state = {
            name: "Naved",
            class: 10
        }
    }
    callMe = () =>{
        console.log("working===>", this)
    }
  render() {
    return (
      <div>
        <h1>Events In React JS</h1>
        <h2>{this.state.name} || {this.state.class}</h2>
        <button onClick={this.callMe}>Click Me</button>
      </div>
    )
  }
}
